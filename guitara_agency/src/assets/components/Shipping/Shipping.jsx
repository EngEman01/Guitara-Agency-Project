// import { Link } from 'react-router-dom';
// import ShippingStyle from './Shipping.module.css';
// import { useEffect, useState } from 'react';

// export default function Shipping() {
//     // Read platform from localStorage (if available)
//     const platform = localStorage.getItem('platform');

//     // Platform images
//     const images = {
//         tiktok: './images/tiktokmovin.gif',
//         bigo: './images/giphy1.gif',
//         mico: './images/mico.gif',
//     };

//     // Conversion rates for 100 units
//     const rates = {
//         egypt: 100,
//         saudi: 7.00,
//         uae: 6.86,
//         qatar: 6.80,
//         bahrain: 0.70,
//         kuwait: 0.58,
//         jordan: 1.32,
//         oman: 0.72,
//         usa: 1.87,
//     };

//     // State for selected country and amounts
//     const [country, setCountry] = useState('usa');
//     const [inputAmount1, setInputAmount1] = useState('');
//     const [inputAmount2, setInputAmount2] = useState('');
//     const [freeShippingMessage, setFreeShippingMessage] = useState('');
//     const [showWhatsApp, setShowWhatsApp] = useState(false); // New state to control WhatsApp display

//     // Handle country change
//     const handleCountryChange = (e) => {
//         setCountry(e.target.value);
//     };

//     // Update amount from input1 (converted to input2)
//     const updateAmountFromInput1 = () => {
//         const input1 = parseFloat(inputAmount1);
//         const countrySelect = country;
//         const rate = rates[countrySelect];

//         if (!isNaN(input1) && rate) {
//             const convertedAmount = (input1 * rate) / 100;

//             // Round to two decimals and set input2
//             const formattedAmount = convertedAmount.toFixed(2);
//             setInputAmount2(formattedAmount);

//             // If the result is calculated, show WhatsApp option
//             setShowWhatsApp(true);
//         }
//     };

//     // Update amount from input2 (converted to input1)
//     const updateAmountFromInput2 = () => {
//         const input2 = parseFloat(inputAmount2);
//         const countrySelect = country;
//         const rate = rates[countrySelect];

//         if (!isNaN(input2) && rate) {
//             const originalAmount = (input2 * 100) / rate;

//             // Round to two decimals and set input1
//             const formattedAmount = originalAmount.toFixed(2);
//             setInputAmount1(formattedAmount);

//             // If the result is calculated, show WhatsApp option
//             setShowWhatsApp(true);
//         }
//     };

//     // Watch for inputAmount1 change
//     useEffect(() => {
//         if (inputAmount1 !== '') {
//             updateAmountFromInput1(); // Update converted value when amount1 changes
//         }

//         // Check for free shipping eligibility
//         if (parseFloat(inputAmount1) > 50) {
//             setFreeShippingMessage('Congratulations! You qualify for free shipping.');
//         } else {
//             setFreeShippingMessage('');
//         }
//     }, [inputAmount1, country]);

//     // Watch for inputAmount2 change
//     useEffect(() => {
//         if (inputAmount2 !== '') {
//             updateAmountFromInput2(); // Update original value when amount2 changes
//         }
//     }, [inputAmount2]);

//     // Handle text input (allow only numbers)
//     const handleTextInput = (e, setter) => {
//         const value = e.target.value;
//         if (/^\d*\.?\d*$/.test(value)) {
//             setter(value);
//         }
//     };

//     return (
//         <div className={ShippingStyle.ShippingPage}>
//             <div className={ShippingStyle.ShippingOption}>
//                 <Link to="/Shipping" className={ShippingStyle.ShippingLink}>
//                     <h1>Shipping</h1>
//                 </Link>

//                 <Link to="/distributors" className={ShippingStyle.ShippingLink}>
//                     <h1>Broadcasters</h1>
//                 </Link>
//             </div>
//             <div className={ShippingStyle.ShippingContent}>
//                 <div className={ShippingStyle.ShippingImage}>
//                     {platform ? (
//                         <div>
//                             <img
//                                 src={images[platform]} // Display the corresponding platform image
//                                 alt={platform}
//                                 className={ShippingStyle.ShippingImage}
//                             />
//                         </div>
//                     ) : (
//                         <p>No platform selected.</p>
//                     )}
//                 </div>

//                 {/* Currency conversion form */}
//                 <div className={ShippingStyle.CurrencyConverter}>
//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="countrySelect">Select Country:</label>
//                         <select
//                             id="countrySelect"
//                             value={country}
//                             onChange={handleCountryChange}
//                         >
//                             <option value="egypt">Egypt</option>
//                             <option value="saudi">Saudi Arabia</option>
//                             <option value="uae">UAE</option>
//                             <option value="qatar">Qatar</option>
//                             <option value="bahrain">Bahrain</option>
//                             <option value="kuwait">Kuwait</option>
//                             <option value="jordan">Jordan</option>
//                             <option value="oman">Oman</option>
//                             <option value="usa">USA</option>
//                         </select>
//                     </div>

//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="inputAmount1">Enter Amount (100 units):</label>
//                         <input
//                             type="text"
//                             id="inputAmount1"
//                             value={inputAmount1}
//                             onChange={(e) => handleTextInput(e, setInputAmount1)}
//                         />
//                     </div>

//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="inputAmount2">Converted Amount:</label>
//                         <input
//                             type="text"
//                             id="inputAmount2"
//                             value={inputAmount2}
//                             onChange={(e) => handleTextInput(e, setInputAmount2)}
//                         />
//                     </div>

//                     {freeShippingMessage && (
//                         <div className={ShippingStyle.FreeShippingMessage}>
//                             <h4>{freeShippingMessage}</h4>
//                         </div>
//                     )}

//                     {/* Conditionally display WhatsApp option */}
//                     {showWhatsApp && (
//                         <div className={ShippingStyle.WhatsAppMessage}>

//                             <a
//                                 href="https://wa.me/201282020076" // Replace with your WhatsApp number
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <img
//                                     src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon
//                                     alt="WhatsApp"
//                                     className={ShippingStyle.WhatsAppIcon}
//                                 />
//                                 <p>Contact us with WhatsApp</p>
//                             </a>

//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


import { Link } from 'react-router-dom';
import ShippingStyle from './Shipping.module.css';
import { useEffect, useState } from 'react';

export default function Shipping() {
    const platform = localStorage.getItem('platform');

    const images = {
        tiktok: './images/tiktokmovin.gif',
        bigo: './images/giphy1.gif',
        mico: './images/mico.gif',
    };

    const rates = {
        egypt: 100,
        saudi: 7.00,
        uae: 6.86,
        qatar: 6.80,
        bahrain: 0.70,
        kuwait: 0.58,
        jordan: 1.32,
        oman: 0.72,
        usa: 1.87,
    };

    const [country, setCountry] = useState('usa');
    const [inputAmount1, setInputAmount1] = useState('');
    const [inputAmount2, setInputAmount2] = useState('');
    const [freeShippingMessage, setFreeShippingMessage] = useState('');
    const [showWhatsApp, setShowWhatsApp] = useState(false);

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleTextInput = (e, setter) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setter(value);
        }
    };

    const updateConvertedAmount = (input1) => {
        const rate = rates[country];
        if (!isNaN(input1) && rate) {
            const convertedAmount = (input1 * rate) / 100;
            setInputAmount2(convertedAmount.toFixed(2));
            setShowWhatsApp(true);
        }
    };

    const handleInputAmount1Change = (e) => {
        handleTextInput(e, setInputAmount1);
        const value = parseFloat(e.target.value);
        updateConvertedAmount(value);
    };

    const handleConvertInput2 = () => {
        const input2 = parseFloat(inputAmount2);
        const rate = rates[country];
        if (!isNaN(input2) && rate) {
            const originalAmount = (input2 * 100) / rate;
            setInputAmount1(originalAmount.toFixed(2));
            setShowWhatsApp(true);
        }
    };

    useEffect(() => {
        if (parseFloat(inputAmount1) > 50) {
            setFreeShippingMessage('مبروك! لقد تأهلت للشحن المجاني.');
            // setFreeShippingMessage('Congratulations! You qualify for free shipping.');
        } else {
            setFreeShippingMessage('');
        }
    }, [inputAmount1]);

    return (
        <div className={ShippingStyle.ShippingPage}>
            <div className={ShippingStyle.ShippingOption}>
                <Link to="/distributors" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn}>نظام الوكالة</button>
                </Link>

                <Link to="/Shipping" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn}>الشحن</button>
                </Link>


            </div>
            <div className={ShippingStyle.ShippingContent}>
                <div className={ShippingStyle.ShippingImage}>
                    {platform ? (
                        <div>
                            <img
                                src={images[platform]}
                                alt={platform}
                                className={ShippingStyle.ShippingImage}
                            />
                        </div>
                    ) : (
                        <p>No platform selected.</p>
                    )}
                </div>

                <div className={ShippingStyle.CurrencyConverter}>
                    <div className={ShippingStyle.CurrencyContent}>
                        <label htmlFor="countrySelect">اختر البلد</label>
                        <select
                            id="countrySelect"
                            value={country}
                            onChange={handleCountryChange}
                        >
                            <option value="egypt">Egypt</option>
                            <option value="saudi">Saudi Arabia</option>
                            <option value="uae">UAE</option>
                            <option value="qatar">Qatar</option>
                            <option value="bahrain">Bahrain</option>
                            <option value="kuwait">Kuwait</option>
                            <option value="jordan">Jordan</option>
                            <option value="oman">Oman</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                    <div className={ShippingStyle.CurrencyContent}>
                        <label htmlFor="inputAmount1">ادخل عدد العملات</label>
                        <input
                            type="text"
                            id="inputAmount1"
                            value={inputAmount1}
                            onChange={handleInputAmount1Change} // Update and convert
                        />
                    </div>

                    <div className={ShippingStyle.CurrencyContent}>
                        <label htmlFor="inputAmount2">المبلغ الاجمالي بعمله بلدك</label>
                        <input
                            type="text"
                            id="inputAmount2"
                            value={inputAmount2}
                            onChange={(e) => handleTextInput(e, setInputAmount2)}
                            onBlur={handleConvertInput2} // Convert on blur
                        />
                    </div>

                    {freeShippingMessage && (
                        <div className={ShippingStyle.FreeShippingMessage}>
                            <h4>{freeShippingMessage}</h4>
                        </div>
                    )}

                    {showWhatsApp && (
                        <div className={ShippingStyle.WhatsAppMessage}>
                            <a
                                href="https://wa.me/201282020076"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className={ShippingStyle.WhatsAppIcon}
                                />
                                {/* <p>Contact us with WhatsApp</p> */}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}