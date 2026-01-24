import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { PuffLoader } from "react-spinners";
import { useProfile } from "../../hooks/useProfile";

function Profile() {
  const { profile, avatar, cover, loading, updateImage } = useProfile();

  function handleImgUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const type = e.target.name as "avatar" | "cover";
    updateImage(file, type);
  }

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
        <PuffLoader
          size={100}
          color="rgb(60 80 224)"
          loading={loading}
        />
      </div>
    );
  }

  if (!profile) {
    return <p className="m-10">Profil nicht gefunden</p>;
  }

  return (
    <div>
      <h2 className="m-10 mb-2 text-xl font-semibold">Profile</h2>

      <div className="m-10 overflow-hidden shadow-lg dark:bg-slate-800">
        <div className="relative h-65">
          <img
            src={cover || "/images/software.jpg"}
            className="h-full w-full object-cover"
          />

          <label className="absolute right-2 bottom-2 cursor-pointer rounded-full bg-white/60 p-2">
            <FiCamera />
            <input
              type="file"
              name="cover"
              hidden
              onChange={handleImgUpdate}
            />
          </label>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={avatar || "/images/avatar.png"}
                className="h-36 w-36 rounded-full border-4 object-cover"
              />
              <label className="absolute right-0 bottom-0 cursor-pointer rounded-full bg-white/60 p-1">
                <FiCamera />
                <input
                  type="file"
                  name="avatar"
                  hidden
                  onChange={handleImgUpdate}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-6 text-center">
          <h3 className="text-xl font-semibold">
            {profile.first_name} {profile.last_name}
          </h3>
          <p className="text-sm text-gray-400">{profile.position}</p>
        </div>
        <div className="border-t px-6 py-4 text-center">
          <h2 className="text-lg font-semibold">Über mich</h2>
          <p className="text-sm">{profile.about || "Keine Beschreibung"}</p>

          <div className="mt-4 flex justify-center gap-3">
            {profile.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
              >
                <FaGithub />
              </a>
            )}
            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
