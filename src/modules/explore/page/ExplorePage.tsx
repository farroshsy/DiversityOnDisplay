/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

function App() {
  const [stateCode, setStateCode] = useState(null);

  const handleClick = (stateCode) => {
    setStateCode(stateCode);
  };

 interface StateData {
  id: string;
  state_code: string;
}  


const stateCodeToImage = {
  AL: {
    src: "map/al.svg",
    className: "absolute h-[18.98%] w-[6.72%] top-[62.63%] right-[33%] bottom-[18.39%] left-[60.28%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
  },
  AK: {
    src: "map/ak.svg",
    className: "..."
  },
  AZ: {
    src: "map/az.svg",
    className: "..."
  },
  AR: {
    src: "map/ar.svg",
    className: "..."
  },
  CA: {
    src: "map/ca.svg",
    className: "..."
  },
  CO: {
    src: "map/co.svg",
    className: "..."
  },
  CT: {
    src: "map/ct.svg",
    className: "..."
  },
  DE: {
    src: "map/de.svg",
    className: "..."
  },
  FL: {
    src: "map/fl.svg",
    className: "..."
  },
  GA: {
    src: "map/ga.svg",
    className: "..."
  },
  HI: {
    src: "map/hi.svg",
    className: "..."
  }, 
  ID: {
    src: "map/id.svg",
    className: "..."
  },
  IL: {
    src: "map/il.svg",
    className: "..."
  },
  IN: {
    src: "map/in.svg",
    className: "..."
  },
  IA: {
    src: "map/ia.svg",
    className: "..."
  },
  KS: {
    src: "map/ks.svg",
    className: "..."
  },
  KY: {
    src: "map/ky.svg",
    className: "..."
  },
  LA: {
    src: "map/la.svg",
    className: "..."
  },
  ME: {
    src: "map/me.svg",
    className: "..."
  },
  MD: {
    src: "map/md.svg",
    className: "..."
  },
  MA: {
    src: "map/ma.svg",
    className: "..."
  },
  MI: {
    src: "map/mi.svg",
    className: "..."
  },
  MN: {
    src: "map/mn.svg",
    className: "..."
  },
  MS: {
    src: "map/ms.svg",
    className: "..."
  },
  MO: {
    src: "map/mo.svg",
    className: "..."
  },
  MT: {
    src: "map/mt.svg",
    className: "..."
  },
  NE: {
    src: "map/ne.svg",
    className: "..."
  },
  NV: {
    src: "map/nv.svg",
    className: "..."
  },
  NH: {
    src: "map/nh.svg",
    className: "..."
  },
  NJ: {
    src: "map/nj.svg",
    className: "..."
  },
  NM: {
    src: "map/nm.svg",
    className: "..."
  },
  NY: {
    src: "map/ny.svg",
    className: "..."
  },
  NC: {
    src: "map/nc.svg",
    className: "..."
  },
  ND: {
    src: "map/nd.svg",
    className: "..."
  },
  OH: {
    src: "map/oh.svg",
    className: "..."
  },
  OK: {
    src: "map/ok.svg",
    className: "..."
  },
  OR: {
    src: "map/or.svg",
    className: "..."
  },
  PA: {
    src: "map/pa.svg",
    className: "..."
  },
  RI: {
    src: "map/ri.svg",
    className: "..."
  },
  SC: {
    src: "map/sc.svg",
    className: "..."
  },
  SD: {
    src: "map/sd.svg",
    className: "..."
  },
  TN: {
    src: "map/tn.svg",
    className: "..."
  },
  TX: {
    src: "map/tx.svg",
    className: "..."
  },
  UT: {
    src: "map/ut.svg",
    className: "..."
  },
  VT: {
    src: "map/vt.svg",
    className: "..."
  },
  VA: {
    src: "map/va.svg",
    className: "..."
  },
  WA: {
    src: "map/wa.svg",
    className: "..."
  },
  WV: {
    src: "map/wv.svg",
    className: "..."
  },
  WI: {
    src: "map/wi.svg",
    className: "..."
  },
  WY: {
    src: "map/wy.svg",
    className: "..."
  }
  

} as const;

interface StateCodeToImage {
  [key: string]: {
    src: string;
    className: string;
  };
}

function MapPage() {
  const [selectedStateCode, setSelectedStateCode] = useState(null);
  const [data, setData] = useState<StateData[]>([]);

  useEffect(() => {
    fetch("https://hackathon-wehack-23.herokuapp.com/api/v1/states/view")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const handleClick = (stateCode) => {
    setSelectedStateCode(stateCode);
    // Go to another page using useHistory
  };

  return (
    <div>
      {data.map(({ id, state_code }) => (
        <img
          key={state_code}
          onClick={() => handleClick(state_code)}
          className={stateCodeToImage[async function (): Promise<void> {
            state_code;
          }].className}
          src={stateCodeToImage[state_code]?.svg || ''}
          alt=""
        />
      ))}
    </div>
  );
}

// const states = [
//   {
//       "id": "Alabama",
//       "state_code": "AL"
//     },
//     {
//       "id": "Alaska",
//       "state_code": "AK"
//     },
//     {
//       "id": "Arizona",
//       "state_code": "AZ"
//     },
//     {
//       "id": "Arkansas",
//       "state_code": "AR"
//     },
//     {
//       "id": "California",
//       "state_code": "CA"
//     },
//     {
//       "id": "Colorado",
//       "state_code": "CO"
//     },
//     {
//       "id": "Connecticut",
//       "state_code": "CT"
//     },
//     {
//       "id": "Delaware",
//       "state_code": "DE"
//     },
//     {
//       "id": "District of Columbia",
//       "state_code": "DC"
//     },
//     {
//       "id": "Florida",
//       "state_code": "FL"
//     },
//     {
//       "id": "Georgia",
//       "state_code": "GA"
//     },
//     {
//       "id": "Hawaii",
//       "state_code": "HI"
//     },
//     {
//       "id": "Idaho",
//       "state_code": "ID"
//     },
//     {
//       "id": "Illinois",
//       "state_code": "IL"
//     },
//     {
//       "id": "Indiana",
//       "state_code": "IN"
//     },
//     {
//       "id": "Iowa",
//       "state_code": "IA"
//     },
//     {
//       "id": "Kansas",
//       "state_code": "KS"
//     },
//     {
//       "id": "Kentucky",
//       "state_code": "KY"
//     },
//     {
//       "id": "Louisiana",
//       "state_code": "LA"
//     },
//     {
//       "id": "Maine",
//       "state_code": "ME"
//     },
//     {
//       "id": "Maryland",
//       "state_code": "MD"
//     },
//     {
//       "id": "Massachusetts",
//       "state_code": "MA"
//     },
//     {
//       "id": "Michigan",
//       "state_code": "MI"
//     },
//     {
//       "id": "Minnesota",
//       "state_code": "MN"
//     },
//     {
//       "id": "Mississippi",
//       "state_code": "MS"
//     },
//     {
//       "id": "Missouri",
//       "state_code": "MO"
//     },
//     {
//       "id": "Montana",
//       "state_code": "MT"
//     },
//     {
//       "id": "Nebraska",
//       "state_code": "NE"
//     },
//     {
//       "id": "Nevada",
//       "state_code": "NV"
//     },
//     {
//       "id": "New Hampshire",
//       "state_code": "NH"
//     },
//     {
//       "id": "New Jersey",
//       "state_code": "NJ"
//     },
//     {
//       "id": "New Mexico",
//       "state_code": "NM"
//     },
//     {
//       "id": "New York",
//       "state_code": "NY"
//     },
//     {
//       "id": "North Carolina",
//       "state_code": "NC"
//     },
//     {
//       "id": "North Dakota",
//       "state_code": "ND"
//     },
//     {
//       "id": "Ohio",
//       "state_code": "OH"
//     },
//     {
//       "id": "Oklahoma",
//       "state_code": "OK"
//     },
//     {
//       "id": "Oregon",
//       "state_code": "OR"
//     },
//     {
//       "id": "Pennsylvania",
//       "state_code": "PA"
//     },
//     {
//       "id": "Rhode Island",
//       "state_code": "RI"
//     },
//     {
//       "id": "South Carolina",
//       "state_code": "SC"
//     },
//     {
//       "id": "South Dakota",
//       "state_code": "SD"
//     },
//     {
//       "id": "Tennessee",
//       "state_code": "TN"
//     },
//     {
//       "id": "Texas",
//       "state_code": "TX"
//     },
//     {
//       "id": "Utah",
//       "state_code": "UT"
//     },
//     {
//       "id": "Vermont",
//       "state_code": "VT"
//     },
//     {
//       "id": "Virginia",
//       "state_code": "VA"
//     },
//     {
//       "id": "Washington",
//       "state_code": "WA"
//     },
//     {
//       "id": "West Virginia",
//       "state_code": "WV"
//     },
//     {
//       "id": "Wisconsin",
//       "state_code": "WI"
//     },
//     {
//       "id": "Wyoming",
//       "state_code": "WY"
//     }
// ];
}

export default App;