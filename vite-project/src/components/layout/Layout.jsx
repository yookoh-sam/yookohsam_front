import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <main>
        <Outlet />
      </main>
    </div>
  )
}