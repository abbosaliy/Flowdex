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
      <div className="flex min-h-[75vh] items-center justify-center">
        <PuffLoader
          size={65}
          color="rgb(59 130 246)"
        />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="px-4 py-10 md:px-8 lg:px-12">
        <p className="text-gray-500 dark:text-gray-400">Profil nicht gefunden</p>
      </div>
    );
  }
  return (
    <div className="px-4 py-10 md:px-8 lg:px-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Profil</h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="relative h-64 w-full">
          <img
            src={cover || `${import.meta.env.BASE_URL}images/software.jpg`}
            className="h-full w-full object-cover"
          />

          <label className="absolute right-4 bottom-4 cursor-pointer rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600">
            <FiCamera className="h-4 w-4 text-gray-700 dark:text-gray-200" />
            <input
              type="file"
              name="cover"
              hidden
              onChange={handleImgUpdate}
            />
          </label>
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={avatar || `${import.meta.env.BASE_URL}images/avatar.png`}
                className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg dark:border-gray-900"
              />

              <label className="absolute right-1 bottom-1 cursor-pointer rounded-full bg-white/90 p-1 shadow transition hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600">
                <FiCamera className="h-4 w-4 text-gray-700 dark:text-gray-200" />
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

        <div className="pt-20 pb-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {profile.first_name} {profile.last_name}
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{profile.position}</p>
        </div>

        <div className="border-t border-gray-200 px-6 py-6 text-center dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Über mich</h4>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{profile.about || "Keine Beschreibung vorhanden."}</p>
          <div className="mt-6 flex justify-center gap-6 text-xl text-gray-600 dark:text-gray-400">
            {profile.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
              >
                <FaGithub />
              </a>
            )}
            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
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
