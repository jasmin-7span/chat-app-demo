import { Locale, getDictionary } from "@/lib/utils";
import React from "react";

type Props = {
  params: {
    lang: Locale;
  };
};

const page = async ({ params: { lang } }: Props) => {
  const intl = await getDictionary(lang);

  return <div>about page {intl.name}</div>;
};

export default page;
