import React from "react";
import Button from "components/Button";
import "./welcomeHome.scss";
import BottomButtons from "./BottomButtons";
import newTabProps from "utils/newTabProps";

const userGuideUrl = "https://dappnode.github.io/DAppNodeDocs/what-can-you-do/";
const surveyUrl = "https://goo.gl/forms/DSy1J1OlQGpdyhD22";

export default function Finished({
  onBack,
  onNext
}: {
  onBack: () => void;
  onNext?: () => void;
}) {
  return (
    <>
      <div className="header">
        <div className="title">All set!</div>
        <div className="description">
          Visit the{" "}
          <a href={userGuideUrl} {...newTabProps}>
            user guide
          </a>{" "}
          to know what you can do with your DAppNode. <br />
          If you want,{" "}
          <a href={surveyUrl} {...newTabProps}>
            leave your feeback{" "}
          </a>
          on how the installation went.
        </div>
      </div>

      <Button
        className="welcome-home-start"
        onClick={onNext}
        variant="dappnode"
      >
        Finish
      </Button>

      <BottomButtons onBack={onBack} />
    </>
  );
}
