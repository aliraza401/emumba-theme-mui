import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { NotFoundProps } from "./NotFound.interfaces";

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="flex flex-grow items-center justify-center">
      <div className="container  max-w-2xl space-y-8 p-6 pb-10 text-center">
        <img className="h-80" src="/assets/images/404.svg" alt="NotFound" />
        <div className="text-4xl font-bold">Page not found!</div>
        <div className="text-sm">
          <div>Oops! The page you are looking for cannot be found.</div>
          <div>Try rechecking the URL to see if it's the right one </div>
        </div>
        <Link to="/" className="inline-block">
          <Button color="secondary" variant="contained">
            Back Home
          </Button>
        </Link>
      </div>
    </section>
  );
};
