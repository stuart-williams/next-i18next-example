import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "lib/i18n";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return <h1>{t("hello_world")}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context)),
    },
  };
};

export default Home;
