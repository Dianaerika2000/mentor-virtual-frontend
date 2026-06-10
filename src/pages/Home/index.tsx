import { Avatar } from "../../features/mentor/components/MentorAvatar/Avatar";


// export function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center py-20 gap-4">
//       <h1 className="text-4xl font-bold text-gray-900">
//         Bienvenido 👋
//       </h1>
//       <Avatar />
//       <p className="text-gray-500 text-lg">
//         El proyecto está funcionando correctamente.
//       </p>
//     </div>
//   )
// }

export const Home = () => {
  return (
    <main>
      <h1>Bienvenidos al Mentor Virtual</h1>
      
      <div className="avatar-floating-container">
        <Avatar />
      </div>
    </main>
  );
};