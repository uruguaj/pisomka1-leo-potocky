import { Suspense } from 'react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
import AuthHomeView from "@/sections/AuthHomeView"
import NonAuthHomeView from "@/sections/NonAuthHomeView"
import HomeLoader from '@/components/Loader'

export const metadata = { title: "Domov | ZoškaSnap" }

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  return (
    // todo loading component
    <Suspense fallback={<HomeLoader />}>
      {session ? <AuthHomeView /> : <NonAuthHomeView />}
    </Suspense>
  )
}