import { useState } from "react";
import {
  User,
  ShoppingBag,
  Calendar,
  MapPin,
  CreditCard,
  Lock,
  Bell,
  LogOut,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  Edit2,
  Save,
  X,
  Camera,
  Mail,
  Phone,
  Home,
} from "lucide-react";
import { useTheme } from "../../contexts/Theme";
import { useAuth } from "../../contexts/Auth";

// // Mock customer data
const mockCustomer = {
  _id: "cust123",
  firstName: "James",
  lastName: "Mitchell",
  email: "james.mitchell@example.com",
  phone: "+44 7700 900123",
  avatar: "https://via.placeholder.com/150/1a1a1a/dc2626?text=JM",
  createdAt: "2023-06-15",
  addresses: [
    {
      _id: "addr1",
      type: "shipping",
      street: "123 Speed Lane",
      city: "London",
      postcode: "SW1A 1AA",
      country: "United Kingdom",
      isDefault: true,
    },
    {
      _id: "addr2",
      type: "billing",
      street: "123 Speed Lane",
      city: "London",
      postcode: "SW1A 1AA",
      country: "United Kingdom",
      isDefault: true,
    },
  ],
};

const mockOrders = [
  {
    _id: "order1",
    orderNumber: "TTC-2024-0156",
    status: "delivered",
    createdAt: "2024-10-15T10:30:00Z",
    total: 2499.99,
    items: [
      {
        productId: "prod1",
        title: "Carbon Fiber GT Spoiler",
        image: "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Spoiler",
        quantity: 1,
        price: 899.99,
      },
      {
        productId: "prod2",
        title: "Racing Bucket Seat",
        image: "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Seat",
        quantity: 2,
        price: 1599.99,
      },
    ],
    shippingAddress: "123 Speed Lane, London, SW1A 1AA",
    trackingNumber: "TRK123456789GB",
  },
  {
    _id: "order2",
    orderNumber: "TTC-2024-0189",
    status: "processing",
    createdAt: "2024-11-01T14:20:00Z",
    total: 399.99,
    items: [
      {
        productId: "prod3",
        title: "LED Headlight Conversion Kit",
        image: "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=LED",
        quantity: 1,
        price: 399.99,
      },
    ],
    shippingAddress: "123 Speed Lane, London, SW1A 1AA",
    trackingNumber: null,
  },
  {
    _id: "order3",
    orderNumber: "TTC-2024-0132",
    status: "shipped",
    createdAt: "2024-09-20T09:15:00Z",
    total: 1899.99,
    items: [
      {
        productId: "prod4",
        title: "Adjustable Coilover Kit",
        image:
          "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Coilover",
        quantity: 1,
        price: 1899.99,
      },
    ],
    shippingAddress: "123 Speed Lane, London, SW1A 1AA",
    trackingNumber: "TRK987654321GB",
  },
];

const mockBookings = [
  {
    _id: "book1",
    bookingNumber: "BK-2024-0045",
    serviceTitle: "Stage 1 Performance Tune",
    serviceImage: "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Tune",
    status: "confirmed",
    scheduledDate: "2024-11-15T09:00:00Z",
    durationMinutes: 180,
    totalPrice: 599.99,
    depositPaid: 150,
    customerMessage: "Looking forward to the tune! BMW M3 F80",
    createdAt: "2024-10-28T16:30:00Z",
  },
  {
    _id: "book2",
    bookingNumber: "BK-2024-0032",
    serviceTitle: "Ceramic Paint Coating",
    serviceImage:
      "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Ceramic",
    status: "completed",
    scheduledDate: "2024-10-10T10:00:00Z",
    durationMinutes: 480,
    totalPrice: 1299.99,
    depositPaid: 300,
    customerMessage: "",
    createdAt: "2024-09-25T11:20:00Z",
  },
  {
    _id: "book3",
    bookingNumber: "BK-2024-0058",
    serviceTitle: "Coilover Suspension Installation",
    serviceImage:
      "https://via.placeholder.com/100x100/1a1a1a/dc2626?text=Suspension",
    status: "pending",
    scheduledDate: "2024-11-25T13:00:00Z",
    durationMinutes: 300,
    totalPrice: 550,
    depositPaid: 200,
    customerMessage: "Bringing my own coilovers for installation",
    createdAt: "2024-11-02T14:45:00Z",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [customer, setCustomer] = useState(mockCustomer);
  const [orders] = useState(mockOrders);
  const [bookings] = useState(mockBookings);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...mockCustomer });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const activeTabStyles = isDark
    ? "bg-rose-500 text-zinc-50 border-l-4 border-rose-500"
    : "bg-sky-500 text-zinc-950 border-l-4 border-sky-500";
  const defaultTabStyles = isDark
    ? "text-zinc-600 hover:bg-zinc-800/90 hover:text-zinc-50 border-l-4 border-transparent"
    : "text-zinc-500 hover:bg-zinc-200/90 hover:text-zinc-950 border-l-4 border-transparent";

  // const [loading, setLoading] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const { user, resetPassword, logout } = useAuth();

  const [notificationsSettings, setNotificationsSettings] = useState({
    orderUpdates: user.settings.notifications.order_updates,
    bookingReminders: user.settings.notifications.booking_reminders,
    promotionalOffers: user.settings.notifications.promotions,
  });

  const handleChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    // setError("");
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    setIsEditingProfile(true);

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      alert("Passwords do not match.");
      setIsEditingProfile(false);
      return;
    }

    try {
      await resetPassword(passwordForm.password, passwordForm.newPassword);
      // console.log("passwordForm:", passwordForm);
      // alert("password reset success");
    } catch (e) {
      console.log("<Dashboard.jsx> Error in handlePasswordReset():", e);
    } finally {
      setIsEditingProfile(false);
    }
  };

  const handleSaveNotifications = async (e) => {
    e.preventDefault();

    setIsEditingProfile(true);

    try {
      //
    } catch (e) {
      console.log("<Dashboard.jsx> Error in handleSaveNotifications():", e);
    } finally {
      setIsEditingProfile(false);
    }
  };

  const getOrderStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "text-green-600 bg-green-600/10 border-green-600/30";
      case "shipped":
        return "text-blue-600 bg-blue-600/10 border-blue-600/30";
      case "processing":
        return "text-yellow-600 bg-yellow-600/10 border-yellow-600/30";
      case "cancelled":
        return "text-red-600 bg-red-600/10 border-red-600/30";
      default:
        return "text-gray-600 bg-gray-600/10 border-gray-600/30";
    }
  };

  const getBookingStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-600/10 border-green-600/30";
      case "confirmed":
        return "text-blue-600 bg-blue-600/10 border-blue-600/30";
      case "pending":
        return "text-yellow-600 bg-yellow-600/10 border-yellow-600/30";
      case "cancelled":
        return "text-red-600 bg-red-600/10 border-red-600/30";
      default:
        return "text-gray-600 bg-gray-600/10 border-gray-600/30";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}m`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  const handleSaveProfile = () => {
    setCustomer(editedProfile);
    setIsEditingProfile(false);
    // Here you would make an API call to update the profile
  };

  const handleCancelEdit = () => {
    setEditedProfile({ ...customer });
    setIsEditingProfile(false);
  };

  const upcomingBookings = bookings.filter(
    (b) =>
      ["confirmed", "pending"].includes(b.status) &&
      new Date(b.scheduledDate) > new Date()
  );

  const recentOrders = orders.slice(0, 3);

  return (
    <div
      className={`${
        isDark ? "bg-zinc-950" : "bg-zinc-100"
      } min-h-screen transition-all duration-3000`}
    >
      {/* Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            {/* Quick Info */}
            <div
              className={`${
                isDark
                  ? "from-zinc-900 to-zinc-950 border-zinc-900"
                  : "from-zinc-200 to-zinc-100 border-zinc-200"
              } bg-linear-to-br rounded-xl border-2 p-6 mb-6 transition-all duration-1000`}
            >
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user?.profile?.avatar || null}
                    alt={`${user?.profile?.first_name} ${user?.profile?.last_name}`}
                    className={`w-24 h-24 rounded-full border-4 mx-auto ${
                      isDark ? "border-rose-500" : "border-sky-500"
                    }`}
                  />
                  <button
                    className={`absolute bottom-0 right-0 p-2 rounded-full ${
                      isDark
                        ? "bg-rose-500 hover:bg-rose-700"
                        : "bg-sky-500 hover:bg-sky-700"
                    } transition-all duration-1000`}
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2
                  className={`${
                    isDark ? "text-rose-500" : "text-sky-500"
                  } text-xl font-bold mt-4 transition-all duration-1000`}
                >
                  {user?.profile?.first_name} {user?.profile?.last_name}
                </h2>
                <p
                  className={`${
                    isDark ? "text-zinc-50" : "text-zinc-950"
                  } text-sm transition-all duration-1000`}
                >
                  {user?.email}
                </p>
                <div
                  className={`${
                    isDark ? "text-zinc-500" : "text-zinc-700"
                  } mt-4 text-xs transition-all duration-1000`}
                >
                  Customer since {new Date(user.createdAt).getFullYear()}
                </div>
              </div>
            </div>
            {/* Sidebar Nav */}
            <nav
              className={`${
                isDark
                  ? "from-zinc-900 to-zinc-950 border-zinc-900"
                  : "from-zinc-200 to-zinc-100 border-zinc-200"
              } bg-linear-to-br border-2 rounded-xl overflow-hidden transition-all duration-1000`}
            >
              {[
                {
                  id: "overview",
                  label: "Overview",
                  icon: <User className="w-5 h-5" />,
                },
                {
                  id: "orders",
                  label: "My Orders",
                  icon: <ShoppingBag className="w-5 h-5" />,
                },
                {
                  id: "bookings",
                  label: "My Bookings",
                  icon: <Calendar className="w-5 h-5" />,
                },
                {
                  id: "profile",
                  label: "Profile Settings",
                  icon: <User className="w-5 h-5" />,
                },
                {
                  id: "addresses",
                  label: "Addresses",
                  icon: <MapPin className="w-5 h-5" />,
                },
                {
                  id: "security",
                  label: "Security",
                  icon: <Lock className="w-5 h-5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-6 py-4 transition-all ${
                    activeTab === tab.id
                      ? `${activeTabStyles}`
                      : `${defaultTabStyles}`
                  } duration-1000`}
                >
                  {tab.icon}
                  <span className="font-semibold">{tab.label}</span>
                </button>
              ))}
            </nav>
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1
                    className={`text-3xl mb-2 font-black ${
                      isDark ? "text-rose-500" : "text-sky-500"
                    } transition-all duration-1000`}
                  >
                    Welcome back, {user?.profile?.first_name}!
                  </h1>
                  <p
                    className={`${
                      isDark ? "text-zinc-500" : "text-zinc-800"
                    } transition-all duration-1000`}
                  >
                    Here's what's happening with your account.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div
                    className={`${
                      isDark
                        ? "from-zinc-900 to-zinc-950 border-zinc-900"
                        : "from-zinc-200 to-zinc-100 border-zinc-200"
                    } bg-linear-to-br border-2 rounded-xl p-6 transition-all duration-1000`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <ShoppingBag className="w-8 h-8 text-red-600" />
                      <span
                        className={`${
                          isDark ? "text-zinc-50" : "text-zinc-800"
                        } text-3xl transition-all duration-1000`}
                      >
                        {orders.length}
                      </span>
                    </div>
                    <p
                      className={`${
                        isDark ? "text-zinc-500" : "text-zinc-500"
                      } text-sm transition-all duration-1000`}
                    >
                      Total Orders
                    </p>
                  </div>
                  <div
                    className={`${
                      isDark
                        ? "from-zinc-900 to-zinc-950 border-zinc-900"
                        : "from-zinc-200 to-zinc-100 border-zinc-200"
                    } bg-linear-to-br border-2 rounded-xl p-6 transition-all duration-1000`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-8 h-8 text-blue-600" />
                      <span
                        className={`${
                          isDark ? "text-zinc-50" : "text-zinc-800"
                        } text-3xl transition-all duration-1000`}
                      >
                        {upcomingBookings.length}
                      </span>
                    </div>
                    <p
                      className={`${
                        isDark ? "text-zinc-500" : "text-zinc-500"
                      } text-sm transition-all duration-1000`}
                    >
                      Upcoming Bookings
                    </p>
                  </div>
                  <div
                    className={`${
                      isDark
                        ? "from-zinc-900 to-zinc-950 border-zinc-900"
                        : "from-zinc-200 to-zinc-100 border-zinc-200"
                    } bg-linear-to-br border-2 rounded-xl p-6 transition-all duration-1000`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Package className="w-8 h-8 text-green-600" />
                      <span
                        className={`${
                          isDark ? "text-zinc-50" : "text-zinc-800"
                        } text-3xl transition-all duration-1000`}
                      >
                        {orders.filter((o) => o.status === "delivered").length}
                      </span>
                    </div>
                    <p
                      className={`${
                        isDark ? "text-zinc-500" : "text-zinc-500"
                      } text-sm transition-all duration-1000`}
                    >
                      Completed Orders
                    </p>
                  </div>
                  <div
                    className={`${
                      isDark
                        ? "from-zinc-900 to-zinc-950 border-zinc-900"
                        : "from-zinc-200 to-zinc-100 border-zinc-200"
                    } bg-linear-to-br border-2 rounded-xl p-6 transition-all duration-1000`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <CheckCircle className="w-8 h-8 text-yellow-600" />
                      <span
                        className={`${
                          isDark ? "text-zinc-50" : "text-zinc-800"
                        } text-3xl transition-all duration-1000`}
                      >
                        {
                          bookings.filter((b) => b.status === "completed")
                            .length
                        }
                      </span>
                    </div>
                    <p
                      className={`${
                        isDark ? "text-zinc-500" : "text-zinc-500"
                      } text-sm transition-all duration-1000`}
                    >
                      Services Done
                    </p>
                  </div>
                </div>

                {/* Upcoming Bookings */}
                {upcomingBookings.length > 0 && (
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 p-6">
                    <h2 className="text-2xl font-black mb-4 flex items-center space-x-2">
                      <Calendar className="w-6 h-6 text-red-600" />
                      <span>Upcoming Bookings</span>
                    </h2>
                    <div className="space-y-4">
                      {upcomingBookings.map((booking) => (
                        <div
                          key={booking._id}
                          className="bg-black/50 border border-gray-800 rounded-lg p-4 hover:border-red-600 transition-all cursor-pointer"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border ${getBookingStatusColor(
                                booking.status
                              )}`}
                            >
                              {booking.status.toUpperCase()}
                            </span>
                            <span className="text-sm text-gray-400">
                              {booking.bookingNumber}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img
                              src={booking.serviceImage}
                              alt={booking.serviceTitle}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold mb-1">
                                {booking.serviceTitle}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {formatDateTime(booking.scheduledDate)}
                                  </span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>
                                    {formatDuration(booking.durationMinutes)}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Orders */}
                <div
                  className={`${
                    isDark
                      ? "from-zinc-900 to-zinc-950 border-zinc-900"
                      : "from-zinc-200 to-zinc-100 border-zinc-200"
                  } bg-linear-to-br border-2 rounded-xl p-6 transition-all duration-1000`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-black flex items-center space-x-2">
                      <ShoppingBag className="w-6 h-6 text-rose-600" />
                      <span>Recent Orders</span>
                    </h2>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-rose-600 hover:text-rose-700 font-semibold text-sm transition-all duration-1000"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order._id}
                        className={`${
                          isDark
                            ? "from-zinc-900 to-zinc-950 border-zinc-900"
                            : "from-zinc-300 to-zinc-200 border-zinc-200"
                        } bg-linear-to-br border-2 rounded-xl p-4 transition-all duration-1000`}
                        onClick={() => setSelectedOrder(order)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full border ${getOrderStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status.toUpperCase()}
                          </span>
                          <span
                            className={`${
                              isDark ? "text-zinc-50" : "text-zinc-800"
                            } text-sm transition-all duration-1000`}
                          >
                            {order.orderNumber}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p
                              className={`${
                                isDark ? "text-zinc-300" : "text-zinc-700"
                              } text-sm mb-1 transition-all duration-1000`}
                            >
                              {formatDate(order.createdAt)}
                            </p>
                            <p
                              className={`${
                                isDark ? "text-zinc-500" : "text-zinc-600"
                              } text-sm transition-all duration-1000`}
                            >
                              {order.items.length} item(s)
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-rose-600">
                              £{order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black mb-2">My Orders</h1>
                  <p className="text-gray-400">Track and manage your orders.</p>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order._id}
                      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all p-6 cursor-pointer"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {order.orderNumber}
                          </h3>
                          <p className="text-sm text-gray-400">
                            Placed on {formatDate(order.createdAt)}
                          </p>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-full border self-start ${getOrderStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status.toUpperCase()}
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-4"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-sm text-gray-400">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-bold text-red-600">
                              £{item.price.toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="text-sm text-gray-400">
                          {order.trackingNumber && (
                            <div className="flex items-center space-x-2">
                              <Truck className="w-4 h-4" />
                              <span>Tracking: {order.trackingNumber}</span>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400 mb-1">Total</p>
                          <p className="text-2xl font-black text-red-600">
                            £{order.total.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black mb-2">My Bookings</h1>
                  <p className="text-gray-400">
                    View and manage your service appointments.
                  </p>
                </div>

                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all p-6 cursor-pointer"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {booking.bookingNumber}
                          </h3>
                          <p className="text-sm text-gray-400">
                            Booked on {formatDate(booking.createdAt)}
                          </p>
                        </div>
                        <span
                          className={`text-sm font-bold px-4 py-2 rounded-full border self-start ${getBookingStatusColor(
                            booking.status
                          )}`}
                        >
                          {booking.status.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={booking.serviceImage}
                          alt={booking.serviceTitle}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2">
                            {booking.serviceTitle}
                          </h4>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDateTime(booking.scheduledDate)}
                              </span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>
                                {formatDuration(booking.durationMinutes)}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {booking.customerMessage && (
                        <div className="mb-4 bg-black/50 border border-gray-800 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">
                            Your message:
                          </p>
                          <p className="text-sm">{booking.customerMessage}</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="text-sm">
                          <p className="text-gray-400 mb-1">
                            Deposit Paid: £{booking.depositPaid.toFixed(2)}
                          </p>
                          {booking.status !== "completed" &&
                            booking.status !== "cancelled" && (
                              <p className="text-gray-400">
                                Balance Due: £
                                {(
                                  booking.totalPrice - booking.depositPaid
                                ).toFixed(2)}
                              </p>
                            )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400 mb-1">Total</p>
                          <p className="text-2xl font-black text-red-600">
                            £{booking.totalPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Settings Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-black mb-2">
                      Profile Settings
                    </h1>
                    <p className="text-gray-400">
                      Manage your personal information.
                    </p>
                  </div>
                  {!isEditingProfile && (
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        First Name
                      </label>
                      {isEditingProfile ? (
                        <input
                          type="text"
                          value={editedProfile.firstName}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                        />
                      ) : (
                        <p className="text-lg">{customer.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Last Name
                      </label>
                      {isEditingProfile ? (
                        <input
                          type="text"
                          value={editedProfile.lastName}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                        />
                      ) : (
                        <p className="text-lg">{customer.lastName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Email Address
                      </label>
                      {isEditingProfile ? (
                        <input
                          type="email"
                          value={editedProfile.email}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                        />
                      ) : (
                        <p className="text-lg">{customer.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Phone Number
                      </label>
                      {isEditingProfile ? (
                        <input
                          type="tel"
                          value={editedProfile.phone}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              phone: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                        />
                      ) : (
                        <p className="text-lg">{customer.phone}</p>
                      )}
                    </div>
                  </div>

                  {isEditingProfile && (
                    <div className="flex gap-4 mt-6 pt-6 border-t border-gray-800">
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Save className="w-5 h-5" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2"
                      >
                        <X className="w-5 h-5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-black mb-2">My Addresses</h1>
                    <p className="text-gray-400">
                      Manage your shipping and billing addresses.
                    </p>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Address</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {customer.addresses.map((address) => (
                    <div
                      key={address._id}
                      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 p-6 hover:border-red-600 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-red-600" />
                          <span className="font-bold uppercase text-sm">
                            {address.type}
                          </span>
                        </div>
                        {address.isDefault && (
                          <span className="text-xs bg-green-600/10 border border-green-600/30 text-green-600 px-3 py-1 rounded-full font-bold">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <div className="text-gray-300 space-y-1 mb-4">
                        <p>{address.street}</p>
                        <p>{address.city}</p>
                        <p>{address.postcode}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-gray-800">
                        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1
                    className={`${
                      isDark ? "text-zinc-300" : "text-zinc-900"
                    } text-3xl font-black mb-2 transition-all duration-1000`}
                  >
                    Security Settings
                  </h1>
                  <p className="text-gray-400">
                    Manage your password and account security.
                  </p>
                </div>
                {/* Password Reset Control */}
                <div className="bg-linear-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-red-600" />
                    <span
                      className={`${
                        isDark ? "text-zinc-100" : ""
                      } transition-all duration-1000`}
                    >
                      Change Password
                    </span>
                  </h2>
                  {user?.password_last_reset && (
                    <p
                      className={`mb-4 text-sm ${
                        isDark ? "text-zinc-500" : "text-zinc-700"
                      } transition-all duration-1000`}
                    >
                      <span>Password last reset:</span>{" "}
                      {user?.password_last_reset.substring(0, 10)}
                    </p>
                  )}
                  <div className="space-y-4">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        name="password"
                        value={passwordForm.password}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        name="newPassword"
                        value={passwordForm.newPassword}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    {/* Confirm New Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        name="confirmNewPassword"
                        value={passwordForm.confirmNewPassword}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    {/* Update Password Button */}
                    <button
                      onClick={handlePasswordReset}
                      disabled={isEditingProfile}
                      className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition-all hover:scale-105"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
                {/* Notificaitons Control */}
                <div className="bg-linear-to-br from-gray-900 to-black rounded-xl border-2 border-gray-800 p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-red-600" />
                    <span
                      className={`${
                        isDark ? "text-zinc-100" : ""
                      } transition-all duration-1000`}
                    >
                      Notification Preferences
                    </span>
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className={`${
                            isDark ? "text-zinc-300" : ""
                          } font-semibold transition-all duration-1000`}
                        >
                          Order Updates
                        </p>
                        <p className="text-sm text-gray-400">
                          Receive notifications about your orders
                        </p>
                      </div>
                      <label className="relative inline-block w-12 h-6">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationsSettings.orderUpdates}
                          onChange={() => {
                            setNotificationsSettings({
                              orderUpdates: !notificationsSettings.orderUpdates,
                            });
                          }}
                        />
                        <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-red-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className={`${
                            isDark ? "text-zinc-300" : ""
                          } font-semibold transition-all duration-1000`}
                        >
                          Booking Reminders
                        </p>
                        <p className="text-sm text-gray-400">
                          Get reminded about upcoming appointments
                        </p>
                      </div>
                      <label className="relative inline-block w-12 h-6">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationsSettings.bookingReminders}
                          onChange={() => {
                            setNotificationsSettings({
                              bookingReminders:
                                !notificationsSettings.bookingReminders,
                            });
                          }}
                        />
                        <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-red-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className={`${
                            isDark ? "text-zinc-300" : ""
                          } font-semibold transition-all duration-1000`}
                        >
                          Promotional Emails
                        </p>
                        <p className="text-sm text-gray-400">
                          Receive special offers and promotions
                        </p>
                      </div>
                      <label className="relative inline-block w-12 h-6">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationsSettings.promotionalOffers}
                          onChange={() => {
                            setNotificationsSettings({
                              promotionalOffers:
                                !notificationsSettings.promotionalOffers,
                            });
                          }}
                        />
                        <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-red-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    {/* Update Notifications Button */}
                    <button
                      // onClick={handlePasswordReset}
                      disabled={isEditingProfile}
                      className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition-all hover:scale-105"
                    >
                      Update Notification Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-red-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-black mb-2">Order Details</h2>
                  <p className="text-gray-400">{selectedOrder.orderNumber}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-bold px-4 py-2 rounded-full border ${getOrderStatusColor(
                        selectedOrder.status
                      )}`}
                    >
                      {selectedOrder.status.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400">
                      {formatDate(selectedOrder.createdAt)}
                    </span>
                  </div>

                  <div className="space-y-4 mb-4">
                    <h3 className="font-bold text-lg">Order Items</h3>
                    {selectedOrder.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-4 pb-4 border-b border-gray-800 last:border-0"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold mb-1">{item.title}</p>
                          <p className="text-sm text-gray-400">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-bold text-red-600">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-800 space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>£{selectedOrder.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-2xl font-black pt-2">
                      <span>Total</span>
                      <span className="text-red-600">
                        £{selectedOrder.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h3 className="font-bold mb-3">Shipping Information</h3>
                  <div className="flex items-start space-x-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>{selectedOrder.shippingAddress}</p>
                  </div>
                  {selectedOrder.trackingNumber && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Truck className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="text-sm text-gray-400">
                            Tracking Number
                          </p>
                          <p className="font-mono font-semibold">
                            {selectedOrder.trackingNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-red-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-black mb-2">Booking Details</h2>
                  <p className="text-gray-400">
                    {selectedBooking.bookingNumber}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-bold px-4 py-2 rounded-full border ${getBookingStatusColor(
                        selectedBooking.status
                      )}`}
                    >
                      {selectedBooking.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={selectedBooking.serviceImage}
                      alt={selectedBooking.serviceTitle}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {selectedBooking.serviceTitle}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDateTime(selectedBooking.scheduledDate)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {formatDuration(selectedBooking.durationMinutes)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedBooking.customerMessage && (
                    <div className="mb-4 bg-black/50 border border-gray-800 rounded-lg p-3">
                      <p className="text-sm text-gray-400 mb-1">
                        Your Message:
                      </p>
                      <p className="text-sm">
                        {selectedBooking.customerMessage}
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-800 space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Service Price</span>
                      <span>£{selectedBooking.totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Deposit Paid</span>
                      <span>-£{selectedBooking.depositPaid.toFixed(2)}</span>
                    </div>
                    {selectedBooking.status !== "completed" &&
                      selectedBooking.status !== "cancelled" && (
                        <div className="flex justify-between text-yellow-600">
                          <span>Balance Due on Completion</span>
                          <span>
                            £
                            {(
                              selectedBooking.totalPrice -
                              selectedBooking.depositPaid
                            ).toFixed(2)}
                          </span>
                        </div>
                      )}
                    <div className="flex justify-between text-2xl font-black pt-2">
                      <span>Total</span>
                      <span className="text-red-600">
                        £{selectedBooking.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {(selectedBooking.status === "pending" ||
                    selectedBooking.status === "confirmed") && (
                    <button className="flex-1 bg-red-600/10 border border-red-600/30 text-red-600 hover:bg-red-600/20 py-3 rounded-lg font-bold transition-colors">
                      Cancel Booking
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
