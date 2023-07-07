import React from 'react';

interface Props {
  sort: boolean;
}

const TablaParticipantes = ({ sort }: Props) => {
  const participants = [
    {
      id: '1',
      name: 'Manuel',
      robot: 'Rob 1',
      image: '#',
    },
    {
      id: '2',
      name: 'Juan',
      robot: 'Rob 3',
      image: '#',
    },
    {
      id: '3',
      name: 'Carlos',
      robot: 'Rob 3',
      image: '#',
    },
  ];
  return (
    <>
      <div className=" mt-4 p-4 bg-white rounded-[1.5rem] shadow-lg">
        <table className="w-[100%] text-center ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nombre del robot</th>
              <th>Fotofragia</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-gray-700 [&>tr]:border-t-2 [&>tr>td]:pb-2 [&>tr>td]:pt-1">
            {participants.map((participant) => (
              <tr className=" first:border-none " key={participant.id}>
                <td>{participant.name}</td>
                <td>{participant.robot}</td>
                <td>{participant.image}</td>
                <td>
                  <button className=" bg-blue-500 p-1 rounded mr-1 ">
                    <span>
                      <svg
                        fill="#fff"
                        width="1.5rem"
                        height="1.7rem"
                        viewBox="-4 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M17.438 22.469v-4.031l2.5-2.5v7.344c0 1.469-1.219 2.688-2.656 2.688h-14.625c-1.469 0-2.656-1.219-2.656-2.688v-14.594c0-1.469 1.188-2.688 2.656-2.688h14.844v0.031l-2.5 2.469h-11.5c-0.531 0-1 0.469-1 1.031v12.938c0 0.563 0.469 1 1 1h12.938c0.531 0 1-0.438 1-1zM19.813 7.219l2.656 2.656 1.219-1.219-2.656-2.656zM10.469 16.594l2.625 2.656 8.469-8.469-2.625-2.656zM8.594 21.094l3.625-0.969-2.656-2.656z"></path>{' '}
                        </g>
                      </svg>
                    </span>
                  </button>
                  <button className=" bg-red-700 p-1 rounded mr-1 ">
                    <span>
                      <svg
                        fill="#fff"
                        width="1.5rem"
                        height="1.7rem"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                  {!sort && (
                    <button className=" bg-green-700 p-1 rounded mr-1 ">
                      <span>
                        <svg
                          className=" fill-slate-400"
                          height="1.7rem"
                          width="1.5rem"
                          version="1.1"
                          id="_x32_"
                          xmlns="http://www.w3.org/2000/svg"
                          //  xmlns:xlink="http://www.w3.org/1999/xlink"
                          //  viewBox="0 0 512 512" xml:space="preserve"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {/* <style type="text/css"> .st0{fill:#000000;} </style> */}
                            <g>
                              <path
                                className="st0"
                                d="M491.896,264.561c-19.448-45.944-51.883-84.992-92.734-112.589C358.311,124.367,308.96,108.214,256,108.214 c-35.29,0-69,7.169-99.633,20.129C110.4,147.786,71.351,180.23,43.75,221.076C16.154,261.899,0,311.287,0,364.214 c0,4.427,0.109,8.814,0.331,13.185h80.202v-26.371H37.775c1.512-25.395,7.338-49.589,16.766-71.895 c9.315-22.04,22.174-42.25,37.819-59.903l30.234,30.242l18.656-18.661l-30.214-30.218c7.186-6.363,14.766-12.307,22.746-17.677 c31.508-21.274,68.754-34.501,109.033-36.896v42.734h26.37v-42.766c25.423,1.524,49.617,7.338,71.92,16.774 c22.044,9.315,42.258,22.17,59.903,37.814l-30.234,30.234l18.632,18.661l30.238-30.218c6.371,7.186,12.279,14.766,17.69,22.75 c21.266,31.509,34.5,68.758,36.891,109.024h-42.738v26.371h80.162c0.242-4.371,0.35-8.758,0.35-13.185 C512.025,328.931,504.838,295.222,491.896,264.561z"
                              ></path>
                              <path
                                className="st0"
                                d="M329.375,199.471c-1.415-0.621-3.169,0.073-4.133,1.653l-75.383,124.072c-18.915,2.96-33.4,19.291-33.4,39.033 c0,21.847,17.706,39.556,39.553,39.556c21.842,0,39.553-17.709,39.553-39.556c0-7.395-2.064-14.282-5.593-20.202l40.968-140.396 C331.46,201.859,330.791,200.093,329.375,199.471z M256.012,384.004c-10.924,0-19.778-8.847-19.778-19.774 c0-10.927,8.854-19.782,19.778-19.782c10.92,0,19.774,8.855,19.774,19.782C275.786,375.157,266.932,384.004,256.012,384.004z"
                              ></path>{' '}
                            </g>{' '}
                          </g>
                        </svg>
                      </span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TablaParticipantes;
