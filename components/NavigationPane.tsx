"use client";

import { useState } from "react";

import { NavigationPaneProps } from "@/lib/types";
import RecordDream from "./RecordDream";
import RediscoverDream from "./RediscoverDream";

function NavigationPane(props: NavigationPaneProps): JSX.Element {
  const [isRecordingDream, setRecordingDream] = useState(false);
  const [isRediscovering, setRediscovering] = useState(false);

  const recordHandler = () => setRecordingDream(true);
  const rediscoverHandler = () => setRediscovering(true);
  const stopRecordHandler = () => setRecordingDream(false);
  const stopRediscovering = () => setRediscovering(false);

  return (
    <>
      <div className="flex flex-row p-8">
        <button
          onClick={rediscoverHandler}
          className="mr-10 border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
        >
          Rediscover Dream
        </button>
        <button
          onClick={recordHandler}
          className="border-2 border-purple-500 text-purple-500 font-bold p-1 bg-zinc-900"
        >
          Record Dream
        </button>
      </div>
      {isRecordingDream && (
        <RecordDream
          archetypes={props.archetypes}
          onCancel={stopRecordHandler}
          onConfirm={stopRecordHandler}
        />
      )}
      {isRediscovering && (
        <RediscoverDream dream={props.dream} onCancel={stopRediscovering} />
      )}
    </>
  );
}

export default NavigationPane;
