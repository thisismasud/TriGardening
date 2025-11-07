import { User } from "lucide-react";

const Profile = () => {
  return (
    <button
      aria-label="User profile"
      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
    >
      <User size={26} />
    </button>
  );
};

export default Profile;
