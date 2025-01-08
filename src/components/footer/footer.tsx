import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between">
        <div className="flex gap-2">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div>list</div>
              <div>list</div>
              <div>list</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>newsletter</div>
            <Input type="email" placeholder="Email" />
            <Button
              variant={"customButton"}
              className="w-full py-2 text-xs font-semibold uppercase text-white sm:w-fit"
            >
              suscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
