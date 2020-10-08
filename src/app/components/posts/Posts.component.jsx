// import React, { Component } from 'react';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import './Posts.scss';

const postsA = [{
    "title": "עזרה בבקשה",
    "name": "unknown",
    "description": "טוב אז ככה היום הסתובבתי עם כמה ידידות שלי ופתאום ראיתי את האקסית שלי עם אחותה ובת דודה שלה לא הסתכלתי על האקסית שלי כי זה היה רק מכאיב לי יותר אחרי שעברנו אותם ידידה שלי אמרה לי שהיא הסתכלה עליי מוזר וזה תמיד קורה גם בבית ספר (לפני הסגר) אני לא מבין למה היא זאת שגמרה את הקשר הזה בגלל ריבים שהיא גרמה להם היא אף פעם לא הייתה לצידי כשהייתי צריך אותה והיא אף פעם לא יזמה שיחות/פגישות, אני היחדי  עם לא אני הייתי שואל היא לא הייתה שואלת אותי בחזרה כי זה לא עניין אותה מתי שהיא זרקה אותי כבר רשמתי לה בהודעה קצרה את מה שהרגשתי אמרתי לה ומה שהיא ענתה לי היה זה ואז היא אמרה שהיא השקיעה את כל הנשמה שלה בקשר ואני לא ת כי זה כואב מידי",
},
{
    "title": "2 גברים אנסו אותי, איך נתתי לזה לקרות? אני כזאת טיפשה",
    "name": "aviv",
    "description": "בטתי רבות איפה ואם בכלל לספר את המקרה שלי באינטרנט, לבסוף החלטתי באמת לכתוב את זה כאן באסקפיפל בגלל שזה אנונימי... ובעיקר בגלל שאני תמיד רואה איך אנשים עוזרים פה אחד לשני.ני סטודנטית.... גרה בצפון הארץ באזור לא הכי טוב מבחינה סוציו-אקונומית.סתובבים אצלנו ברחובות טיפוסים לא הכי נעימים... בלשון המעטהיש לנו גן ציבורי בשביל שבדרך לשכונה, שתמיד היו שמועות שבלילה אסור לעבור שם..תמיד אמרו את זה, עוד מאז שהייתי ילדה קטנה היו את השמועות האלה, היו מכל מיני  שרוצחים שם חתולים, שיש שם אנס קבוע שמסתובב... ואני לעולם לא האמנתי. תמיד היה נשמע לי כמו האגדה השכונתית הזאת שיש בכל שכו.."
}]


const renderItem = (itemName, hebrew, value) => (
    <div id={itemName} className={"post-item " + itemName}>
        <div className="key">{hebrew}: </div>
        <span>{value}</span>
    </div>)

const Posts = ({ posts }) => (
    <div className="posts">
        { 
            postsA.map((post, i) => (
            <div className="container-post" key={i}>
                <div className="header">
                    {renderItem("title", "כותרת", post.title)}
                    <div className="same-line post-item">
                        { post.name && renderItem("name", "יוצר", post.name)}
                        {renderItem("date", "תאריך", post.date)}
                    </div>
                </div>
                <div className="content">
                    <div id="desc" className={"post-item " + "desc"}>
                        <span>{post.description}</span>
                    </div>
                </div>
            </div>))
        }
    </div>);

export default Posts;
