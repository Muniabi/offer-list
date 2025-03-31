import React from "react";
import Listing from "./Listing";
import "./App.css";
import data from "./data/etsy.json";

interface ListingItem {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

function App() {
    console.log("data", data);

    return <Listing items={data as ListingItem[]} />;
}

export default App;
