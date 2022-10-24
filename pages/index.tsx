import { serverSideTranslations } from "lib/i18n";
import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("hello_world")}</h1>
      <p>
        {t("sprintf_example", {
          postProcess: "sprintf",
          sprintf: ["a", "b", "c", "d"],
        })}
      </p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context)),
    },
  };
};

export default Home;
