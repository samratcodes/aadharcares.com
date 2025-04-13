'use client';
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from 'js-cookie';
import axios from 'axios';

const PaymentHistory = () => {
  const [balance, setBalance] = useState(5299);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [profile, setProfile] = useState(null);
  const [transactions, setTransactions] = useState([
    {
      id: "324",
      amount: 4000,
      date: "27th June",
      remarks: "medicines",
      status: "Success",
    },
    {
      id: "265",
      amount: 5800,
      date: "13th May",
      remarks: "Hospital visit and medicines",
      status: "Pending",
    },
    {
      id: "154",
      amount: 3800,
      date: "16th Feb",
      remarks: "Physiotherapy",
      status: "Success",
    },
    {
      id: "312",
      amount: 9740,
      date: "24th Jan",
      remarks: "Eye Checkup",
      status: "Success",
    },
  ]);

  useEffect(() => {
    const fetchProfile = async () => {
      const storedToken = Cookies.get('docsAccessToken');
      console.log('Token from cookie:', storedToken);

      if (!storedToken) {
        console.error('No token found in cookies');
        return;
      }

      try {
        const res = await axios.get(`${API_URL}api/doctor/profile`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        console.log('Fetched data:', res.data);
        setProfile(res.data.doctor);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [API_URL]);

  const generateTransactionId = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }
    setBalance(balance - amount);
    const newTransaction = {
      id: generateTransactionId(),
      amount,
      date: new Date().toLocaleDateString(),
      remarks: remarks || "Withdrawal",
      status: "Pending",
    };
    setTransactions([...transactions, newTransaction]);
    setWithdrawAmount("");
    setRemarks("");
    alert(`Withdrawal of Rs.${amount} successful!`);
  };

  return (
    <div className=" min-h-screen bg-gray-100 rounded-lg py-6">
        <h1 className="text-4xl font-bold text-green-500 ml-8 mb-8">Payment History</h1>
      {/* current balance section */}
      <div className="my-12 px-4 md:px-16">
  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 rounded-2xl shadow-lg bg-white py-10 px-8 md:px-12 max-w-6xl mx-auto transition-shadow duration-300 hover:shadow-xl">
    
    <div className="flex items-center gap-6">
      <div className="h-20 w-20 rounded-full overflow-hidden  shadow-sm">
        {profile?.profilePicture ? (
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <CgProfile className="h-full w-full text-gray-300 p-2" />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Hello, {profile?.firstName || ""}
        </h2>
        <p className="italic text-sm text-gray-500 mt-1">
          Your available balance
        </p>
      </div>
    </div>

    <div className="text-center md:text-right">
      <p className="text-4xl md:text-5xl font-bold text-[#009C65]">
        Rs. {balance}
      </p>
    </div>

  </div>
</div>


      <div>
        <section className="mx-auto w-full max-w-8xl px-4 pl-16 pr-32 my-4 ">
          {/* transaction history title */}
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-3xl font-semibold">Transaction History</h2>
              <p className="mt-1 text-2xl text-gray-700">
                ({transactions.length})
              </p>
            </div>
          </div>

          {/* transaction table section */}
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200 table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                          <span>Transaction ID</span>
                        </th>
                        <th className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                          Amount
                        </th>
                        <th className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                          Date
                        </th>
                        <th className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                          Remarks
                        </th>
                        <th className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-base font-normal text-gray-900">
                              transaction #{transaction.id}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-base text-gray-900">
                              Rs. {transaction.amount}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                            {transaction.date}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                            {transaction.remarks}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 ${
                                transaction.status === "Success"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* withdraw money section */}
          <div className="inline-block my-12 ">
            <div className="flex items-center justify-center gap-6 rounded-lg shadow-md hover:shadow-lg py-4 px-8 bg-white">
              <div className="flex flex-col justify-center items-start gap-4">
                <h2 className="text-2xl font-semibold">Withdraw Money</h2>
                <div className="flex gap-4">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg py-2 px-4"
                    placeholder="Enter amount"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg py-2 pl-4 pr-16"
                    placeholder="Enter remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </div>
                <button
                  className="mt-2 py-2 px-4 bg-[#009C65] text-white rounded-lg hover:opacity-70 active:opacity-40 transition-all"
                  onClick={handleWithdraw}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentHistory;
