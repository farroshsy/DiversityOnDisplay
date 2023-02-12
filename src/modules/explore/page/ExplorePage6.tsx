/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

const ExplorePage: React.FC = () => {
  const router = useRouter();
  const [imageID, setImageID] = useState<null | string>(null);

  const onImageClick = useCallback((id: string) => {
    setImageID(id);
    router.push(`/explore/region/${id}`);
  }, [router]);

  interface StateData {
    id: string;
    state_code: string;
  }
  interface StateCodeToImage {
    [key: string]: {
      src: string;
      className: string;
    };
  }
  const stateCodeToImage: StateCodeToImage = {
    AL: {
      src: "map/AL.svg",
      className:
        "absolute h-[18.98%] w-[6.72%] top-[62.63%] right-[33%] bottom-[18.39%] left-[60.28%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
    },
  };
  const [selectedStateCode, setSelectedStateCode] = useState<null | string>(
    null
  );
  const [data, setData] = useState<StateData[]>([]);

  useEffect(() => {
    fetch("https://hackathon-wehack-23.herokuapp.com/api/v1/states/view")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((stateData: StateData) => {
        const { state_code } = stateData;
        const { src, className } = stateCodeToImage[state_code];
        return (
          <img
            key={state_code}
            src={src}
            className={className}
            onClick={() => onImageClick(stateData.id)}
            onKeyDown={() => onImageClick(stateData.id)}
            role="button"
            tabIndex={0}
            alt={state_code}
            data-testid={`state-${state_code}`}
          />
        );
      })}
    </div>
  );
};

export default ExplorePage;
