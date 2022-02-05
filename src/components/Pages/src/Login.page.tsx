// node_modules
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";

// packages
import UIComponents from "@src-path/packages/UIComponents";

// hooks
import useFetch from "@src-path/hooks/useFetch";

// components
import Forms from "@src-path/components/Forms";
import ModalSetFullscreen from "@src-path/components/ModalSetFullscreen";
import ModalLandscape from "@src-path/components/ModalLandscape";

const Login = () => {
  const router = useRouter();

  const [user, userIsLoading, runFetchUser] = useFetch({
    method: "POST",
    path: "login",
  });

  useEffect(() => {
    if (user.username) {
      router.push("/chess");
    }
  }, [router, user]);

  return (
    <>
      <div className="flex min-w-full min-h-screen bg-[url('/assets/ui/bg-ui.png')] bg-[length:300px_300px]">
        <div className="flex flex-col m-auto w-80">
          <UIComponents.Container
            header={
              <div className="w-[167px] h-[41px] mx-auto">
                <Image
                  src="/logo.png"
                  alt="Logo of Boardverse"
                  width={167}
                  height={41}
                />
              </div>
            }
            headerColor="stone"
            headerColorIntensity={500}
            bgColor="slate"
            bgColorIntensity={50}
          >
            <Forms.Login
              onSubmit={runFetchUser}
              error={user.error}
              isLoading={userIsLoading}
            />
          </UIComponents.Container>
        </div>
      </div>
      <ModalSetFullscreen />
      <ModalLandscape />
    </>
  );
};

export default Login;
