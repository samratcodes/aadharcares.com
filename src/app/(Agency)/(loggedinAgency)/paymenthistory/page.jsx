'use client';
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
<<<<<<< HEAD
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
=======
import axios from "axios";

const PaymentHistory = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [balance, setBalance] = useState(345);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/doctor/transactions`);
        
        console.log(response.data.data);

        setTransactions(response.data.data || []);
        
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactionData();
  }, []);
>>>>>>> 35ddb65f308f29fa32de654807636d1c877aa169

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

    const newTransaction = {
      id: Math.floor(100 + Math.random() * 900).toString(),
      amount,
      date: new Date().toISOString().split("T")[0], // format yyyy-mm-dd
      remarks: remarks || "Withdrawal",
      status: "Pending",
    };

    setBalance(balance - amount);
    setTransactions([...transactions, newTransaction]);
    setWithdrawAmount("");
    setRemarks("");

    alert(`Withdrawal of $ ${amount} successful!`);
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="w-[calc(100%-64px)]">
      {/* Balance Section */}
      <div className="inline-block my-12 ml-16">
        <div className="flex items-center justify-center gap-44 rounded-lg hover:shadow-lg py-8 px-12 bg-white">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex gap-3">
              <div className="h-10 w-10 flex-shrink-0">
                <CgProfile className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-semibold">Hello Liza,</h2>
            </div>
            <p className="italic text-sm text-gray-500">Your available balance</p>
          </div>
          <p className="text-5xl font-bold text-[#009C65]">${balance}</p>
        </div>
>>>>>>> 35ddb65f308f29fa32de654807636d1c877aa169
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


      {/* Main Content */}
      <section className="mx-auto w-full max-w-8xl px-4 pl-16 pr-32 my-4">
        {/* Title */}
        <div className="flex gap-2 justify-center items-center mb-6">
          <h2 className="text-3xl font-semibold">Transaction History</h2>
          <p className="mt-1 text-2xl text-gray-700">({transactions.length})</p>
        </div>

<<<<<<< HEAD
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
=======
        {/* Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50">
              <tr>
                {["Transaction ID", "Amount", "Date", "Remarks", "Status"].map((head) => (
                  <th key={head} className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-base text-gray-900">
                    transaction #{transaction.id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-base text-gray-900">
                    ${transaction.amount}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Date(transaction.createdAt).toLocaleString()}
>>>>>>> 35ddb65f308f29fa32de654807636d1c877aa169

                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                    {transaction.remarks || transaction.description || "N/A"}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold leading-5 ${
                        transaction.status === "Success"
                          ? "bg-green-100 text-green-800"
                          : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
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

        {/* Withdraw Form */}
        <div className="inline-block my-12">
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
  );
};

export default PaymentHistory;
