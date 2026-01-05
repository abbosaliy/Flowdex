import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);

  return (
    <div>
      <h2 className="m-15 mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Profile</h2>

      <div className="m-15 overflow-hidden shadow-lg dark:bg-slate-800">
        <div className="relative h-55 w-full">
          <img
            src={cover || "/images/software.jpg"}
            alt="cover"
            className="h-full w-full object-cover"
          />

          <label className="absolute right-2 bottom-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/60 dark:bg-black/60">
            <FiCamera className="h-5 w-5" />

            <input
              type="file"
              accept="image/*"
              hidden
            />
          </label>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={avatar || "/images/user.jpg"}
                alt="avatar"
                className="h-35 w-35 rounded-full border-4 object-cover dark:border-slate-800"
              />

              <label className="absolute right-0 bottom-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/60 dark:bg-black/60">
                <FiCamera className="h-4 w-4" />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-6 text-center">
          <h3 className="text-xl font-semibold">Abbosbek Anvarjonov</h3>
          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        <div className="flex flex-col items-center border-t px-6 py-4 dark:border-white/10">
          <h4 className="mb-2 text-sm font-semibold uppercase">Über mich</h4>
          <p className="dark: text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero praesentium enim, doloribus fugiat possimus? Accusamus amet, soluta
            veniam ex officia eligendi dolores quisquam dolorem ipsa at facere veritatis pariatur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsum vero praesentium enim, doloribus fugiat possimus? Accusamus amet, soluta veniam ex officia eligendi dolores quisquam dolorem
            ipsa at facere veritatis pariatur!
          </p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <h4 className="text-sm font-semibold uppercase"> Follow me</h4>
            <div className="flex items-center gap-2">
              <a href="#">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
