"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Breadcrumb = ({ capitalizeLinks }) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <>
      <div className="mx-4 mb-5">
        <ul className="flex py-3 items-center ">
          <li className="hover:underline mx-1 font-bold ">
            <Link href={"/"}>
              <div className="flex text-xs sm:text-base ">
                <HomeIcon
                  className="text-md sm:text-3xl "
                  sx={{ marginRight: 0.3, marginTop: -0.5 }}
                />
                Home
              </div>
            </Link>
          </li>
          {pathNames.length > 0 && (
            <KeyboardDoubleArrowRightIcon className="text-lg sm:text-2xl" />
          )}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join("/")}`;
            let itemClasses =
              paths === href
                ? { textDecoration: "none", color: "#ff9500" }
                : { textDecoration: "none" };

            let itemLink = capitalizeLinks
              ? link
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase())
              : link;
            return (
              <React.Fragment key={index}>
                <li
                  className="hover:underline mx-1 font-semibold text-xs sm:text-base"
                  style={itemClasses}
                >
                  <Link href={href}>{itemLink}</Link>
                </li>

                {pathNames.length !== index + 1 && (
                  <KeyboardDoubleArrowRightIcon className="text-lg sm:text-2xl" />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
