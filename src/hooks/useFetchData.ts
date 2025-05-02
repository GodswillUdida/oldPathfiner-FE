// import { useState, useEffect } from "react";
// import axios, { AxiosResponse, AxiosError } from "axios";

// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }

// const useFetchData = <T>(
//   url: string,
//   token: string | null,
//   trigger: string
// ) => {
//   const [state, setState] = useState<FetchState<T>>({
//     data: null,
//     loading: false,
//     error: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       setState({ data: null, loading: true, error: null });
//       try {
//         const response: AxiosResponse<T> = await axios.get(url, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setState({ data: response.data, loading: false, error: null });
//       } catch (err) {
//         const error = err as AxiosError;
//         setState({
//           data: null,
//           loading: false,
//           error: error.response?.data?.message || "Failed to fetch data",
//         });
//       }
//     };

//     if (token) fetchData();
//   }, [url, token, trigger]);

//   return state;
// };

// export default useFetchData;
