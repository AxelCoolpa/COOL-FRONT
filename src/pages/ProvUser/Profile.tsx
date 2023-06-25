import ProfileProviderCard from "../../components/cards/ProfileProviderCard";
import SettingsProviderCard from "../../components/cards/SettingsProviderCard";

const ProfileProvider = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 px-4">
        <SettingsProviderCard />
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <ProfileProviderCard />
      </div>
    </div>
  );
};

export default ProfileProvider;
