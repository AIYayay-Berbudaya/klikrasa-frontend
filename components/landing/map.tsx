"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./MapLeaflet"), { ssr: false });

export default LeafletMap;
