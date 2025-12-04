"use client";
import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>

          <div className="reviews__wrapper">
            {[
              {
                name: "Hanna M.",
                text:
                  "This app has been a game-changer for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers."
              },
              {
                name: "David B.",
                text:
                  "I love this app! It provides concise and accurate summaries of books in a way that is easy to understand. It's also very user-friendly and intuitive."
              },
              {
                name: "Nathan S.",
                text:
                  "This app is a great way to get the main takeaways from a book without having to read the entire thing. The summaries are well-written and informative."
              },
              {
                name: "Ryan R.",
                text:
                  "If you're a busy person who loves reading but doesn't have the time to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content."
              }
            ].map((r, i) => (
              <div className="review" key={i}>
                <div className="review__header">
                  <div className="review__name">{r.name}</div>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <div className="review__body">{r.text}</div>
              </div>
            ))}
          </div>

          <div className="reviews__btn--wrapper">
            <button className="btn home__cta--btn">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}
