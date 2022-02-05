// node_modules
import React from "react";
import Image from "next/image";

// packages
import UIComponents from "@src-path/packages/UIComponents";

// hooks
import useFetch from "@src-path/hooks/useFetch";

// components
import ModalSetFullscreen from "@src-path/components/ModalSetFullscreen";
import ModalLandscape from "@src-path/components/ModalLandscape";
import Forms from "@src-path/components/Forms";
import Link from "next/link";

const Forgot = () => {
  const [user, userIsLoading, runFetchUser] = useFetch({
    method: "POST",
    path: "api/forgot",
  });

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
            {process.env.NEXT_PUBLIC_EMAIL_ACTIVE == "true" ? (
              <Forms.Forgot
                onSubmit={runFetchUser}
                error={user.error}
                isLoading={userIsLoading}
              />
            ) : (
              <div className="flex flex-col mx-3 mb-3">
                <span className="mx-auto my-4 text-lg">
                  Please contact the administrator.
                </span>
                <Link href={"/"}>
                  <UIComponents.Button
                    buttonColor="blue"
                    buttonColorIntensity={700}
                  >
                    <p className="text-white">Go to Login page</p>
                  </UIComponents.Button>
                </Link>
              </div>
            )}
          </UIComponents.Container>
        </div>
      </div>
      <ModalSetFullscreen />
      <ModalLandscape />
    </>
  );
};

export default Forgot;
