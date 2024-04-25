import axios from "axios";
import useSWR from "swr";
import { toast } from "sonner";

const axiosInstance = axios.create({ baseURL: "https://reqres.in" });

const get = (url: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    url,
    async (url: string) => {
      const response = await axiosInstance.get(url);
      return response.data;
    },
  );
  return { response: data, error, isLoading, mutate };
};

const post = async (url: string, postData: object) => {
  await axiosInstance
    .post(url, postData)
    .then(() => {
      toast.success("Done! All set.", {
        description: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    })
    .catch((error) => {
      toast.error("Something went wrong!", {
        description: error.response.data.error,
      });
    });
};

const patch = async (url: string, patchData: object) => {
  await axiosInstance
    .patch(url, patchData)
    .then(() => {
      toast.success("Done! All set.", {
        description: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    })
    .catch((error) => {
      toast.error("Something went wrong!", {
        description: error.response.data.error,
      });
    });
};

const remove = async (url: string) => {
  await axiosInstance
    .delete(url)
    .then(() => {
      toast.success("Done! All set.", {
        description: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    })
    .catch((error) => {
      toast.error("Something went wrong!", {
        description: error.response.data.error,
      });
    });
};

const apiService = { get, post, patch, remove };

export default apiService;
