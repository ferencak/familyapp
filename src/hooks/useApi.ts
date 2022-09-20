import { useEffect, useState } from "react";
import axios from "axios";
import { IUseApiProps } from "interfaces/IUseApi";
import { config } from "config/config";

const useApi = ({
    url,
    method,
    data,
    headers,
    onSuccess,
    onError,
    autoFetch,
    mock, 
    withToken,
    params
}: IUseApiProps) => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setIsLoading] = useState<boolean>(false);
    const backendApi = config.api[process.env.NODE_ENV];
    if(!backendApi) throw new Error(`No backend api found for ${process.env.NODE_ENV}`);

    const call = async (callData?: any) => {
        setIsLoading(true);
        try {
            const res = await axios({
                url: `${!mock ? backendApi + url : url}/${params ? Object.values(params).join("/") : ""}`,
                method,
                data: data ? data : callData,
                headers: {
                    ...headers, 
                    ...(withToken ? { Authorization: `Bearer ${localStorage.getItem('access_token')}` } : {})
                }
            });
            setIsLoading(false);
            setResponse(res.data);
            if (onSuccess) onSuccess(res.data);
        } catch (err: any) {
            setIsLoading(false);
            setError(err.response);
            if (onError) onError(err.response);
        }
    }

    useEffect(() => {
        if (autoFetch) call();
    }, []);
    

    return {
        response,
        error,
        loading,
        call
    };
};

export default useApi;
