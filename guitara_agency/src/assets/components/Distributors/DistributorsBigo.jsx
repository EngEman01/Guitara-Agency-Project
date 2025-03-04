import { Link } from "react-router-dom";
import DistributorsStyle from './Distributors.module.css';
import { useEffect } from "react";
import { gsap } from 'gsap';

export default function DistributorsBigo() {
    useEffect(() => {
        const target = document.querySelector('#my-text');
        const handleScrollAnimation = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        target,
                        { y: 115 },
                        {
                            y: 0,
                            duration: 0.5,
                            delay: 0.2,
                        }
                    );
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleScrollAnimation, {
            threshold: 0.5,
        });

        if (target) {
            observer.observe(target);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={DistributorsStyle.distributorsStylePage} dir="rtl">
            <div className={DistributorsStyle.distributorsOption}>
                <Link to="/bigo" className={DistributorsStyle.distributorsLink}>
                    <button className={DistributorsStyle.distributorsBtn}>الشحن</button>
                </Link>
                <Link to="/distributorsbigo" className={DistributorsStyle.ShippingLink}>
                    <button className={DistributorsStyle.distributorsBtn}>نظام الوكالة</button>
                </Link>
            </div>

            <div className={DistributorsStyle.distributorsContent}>
                <h1 id="my-text">الشروط</h1>
                <ol type="1">
                    <li>المشاهدات بدون مقابل</li>
                    <li>ترندات بدون حدود لحد نفاذ نقاط الوكاله</li>
                    <li>القبض يوصل قبل معاده بقدر الامكان كامل</li>
                    <li>احتواء مذيعين الوكاله داخل العيلة علشان نساعده يقفل أكبر تارجيت ممكن من خلال نسبة بدالات أو جوايز العيلة</li>
                    <li>لا يوجد خصم داخل مصر أو خارج مصر</li>
                    <li>علي مدار الشهر أو في آخر الشهر ممكن نسلفه بضمان الراتب للشهر الجديد علشان يقفل أكبر تارجيت ممكن</li>
                    <li>مسابقات الوكالة وجوايزها عبارة عن دهب أو آيفون أو مبالغ مالية (في حاله في مسابقة مسموح للجميع بالاشتراك في المسابقة بشروط المسابقه)</li>
                </ol>
            </div>
        </div>
    );
}
