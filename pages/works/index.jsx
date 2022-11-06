import RootLayout from "@/components/rootLayout";
import Head from "next/head";

import { useState } from "react";

import Modal from "@/components/common/modal";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

import WorkItem from "@/components/content/WorkItem";
import data from "@/components/utils";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const toggelModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>i.me | Works</title>
      </Head>
      <RootLayout>
        {isModalOpen === true ? (
          <Modal className={""} toggelModal={toggelModal}>
            <ModalContent url={iframeUrl} />
          </Modal>
        ) : (
          ""
        )}
        <div>
          <Heading text={"Works & Projects"} className="md:text-center " />
          <Paragraph
            text={
              "This is the list of projects and works I have been working on for the past years up to now."
            }
            className="md:text-center"
          />
        </div>
        <div className="grid py-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.works.map((work, index) => (
            <WorkItem
              key={index}
              work={work}
              setIframeUrl={(url) => setIframeUrl(url)}
              toggelModal={() => toggelModal()}
            />
          ))}
        </div>
      </RootLayout>
    </>
  );
}

export default Works;

function ModalContent({ url }) {
  return (
    <div className="modal-iframe-container">
      <div className="absolute bottom-0 rounded-bl-2xl rounded-tr-lg left-0 text-xs p-1 bg-red-50 text-red-500">
        <span>
          This is static page.{" "}
          <a
            className="underline"
            target={"_blank"}
            rel={"noreferrer"}
            href={url}
          >
            {" "}
            Click here
          </a>{" "}
          to open the dynamic page.
        </span>
      </div>
      <iframe src={url} className="modal-iframe rounded-2xl"></iframe>
    </div>
  );
}
