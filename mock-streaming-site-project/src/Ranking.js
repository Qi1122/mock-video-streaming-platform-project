// Ranking.js
import React, { useState, useEffect } from 'react';

const Ranking = () => {
    const [jsonData, setJsonData] = useState({});
    const [donations, setDonations] = useState([]);
    const [donationIndex, setDonationIndex] = useState(0);
    const [title, setTitle] = useState('');

    // fetch('./rankOne.json')
    // fetch('./rankTwo.json')
    fetch('./rankThree.json')
        .then(response => response.json())
        .then(response => {
            setJsonData(response);
            setTitle(response.title);
        })
        .catch(error => console.error('Error fetching JSON:', error));

    useEffect(() => {
        if (jsonData.contents && donationIndex < jsonData.contents.length) {
            const timer = setTimeout(() => {
                setDonations((prevDonation) => [
                    ...prevDonation,
                    jsonData.contents[donationIndex],
                ]);
                setDonationIndex((prevIndex) => prevIndex + 1);
            }, ); // 每 500 毫秒添加一条消息

            return () => clearTimeout(timer);
        }
    }, [jsonData, donationIndex]);

    // Sort donations by amount in descending order
    const sortedDonations = [...donations].sort((a, b) => b.amount - a.amount);

    return (
        <div>
            <ul className="shineTitle title">{title}</ul>
            {sortedDonations.map((donation, index) => (
                <ul key={index}>{donation.name} : {donation.amount}</ul>
            ))}
        </div>
    );
};

export default Ranking;
