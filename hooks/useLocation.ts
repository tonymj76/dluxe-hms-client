import {useMemo} from "react";
import {useGetLocationQuery} from "@/src/redux/services";
import type {LocationType} from "@/src/utils/types";

export const useLocation = (name: LocationType) => {
    const { data, error, isLoading } = useGetLocationQuery(name)
    return useMemo(()=> ([data, error, isLoading]), [data, error, isLoading])
}
