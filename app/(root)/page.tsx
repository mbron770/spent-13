import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // <div>
    //   <UserButton afterSignOutUrl="/"/>
    // </div>
  return (
    <>

<h1>homepage/dashboard</h1>
<UserButton afterSignOutUrl="/"/>
    
    </>
    
    
  )
}





// export default function Home() {
//   return (
//     <main>
//       <h1>Spent</h1>
//     </main>
    
//   )
// }


//app/page.tsx
