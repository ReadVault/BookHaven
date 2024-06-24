"use server";

import { auth, signIn, signOut } from "@repo/auth/auth";

export async function SignIn() {
  const session = await auth();

  if (!session)
    return (
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <form
          action={async () => {
            "use server";
            await signIn("iam.inuk.blog");
          }}
        >
          <button className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
            Login
          </button>
        </form>
      </div>
    );

  return (
    <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          Sign out {session.user?.name}
        </button>
      </form>
    </div>
  );
}
