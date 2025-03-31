import React from "react";
import "./App.css";

export interface ListingItem {
    listing_id: number;
    url: string;
    MainImage?: {
        url_570xN?: string;
    };
    title: string;
    currency_code?: string;
    price: string;
    quantity: number;
}

interface ListingProps {
    items?: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
    const formatPrice = (currency = "USD", price: string) => {
        const numericPrice = parseFloat(price).toFixed(2);
        switch (currency.toUpperCase()) {
            case "USD":
                return `$${numericPrice}`;
            case "EUR":
                return `€${numericPrice}`;
            default:
                return `${numericPrice} ${currency}`;
        }
    };

    const getQuantityLevel = (quantity: number) => {
        if (quantity <= 10) return "level-low";
        if (quantity <= 20) return "level-medium";
        return "level-high";
    };

    const truncateTitle = (title: string) => {
        if (!title) return "";
        return title.length > 50 ? title.slice(0, 50) + "…" : title;
    };

    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url || "#"}>
                            <img
                                src={item.MainImage?.url_570xN}
                                alt={truncateTitle(item.title)}
                            />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title" title={item.title}>
                            {truncateTitle(item.title)}
                        </p>
                        <p className="item-price">
                            {formatPrice(item.currency_code, item.price)}
                        </p>
                        <p
                            className={`item-quantity ${getQuantityLevel(
                                item.quantity
                            )}`}
                        >
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;
