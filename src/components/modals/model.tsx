import React from "react";
import { useSelector } from "react-redux";

export const Modal = () => {

  const globalColor = useSelector((state: any) => {
    return state.dummy.color;
  });

  return (
    <dialog id="my_modal_2" className="modal text-c-purple ">
      <form method="dialog" className="modal-box no-scrollbar overflow-scroll">
        <h3 className="font-medium text-lg mb-2">Name</h3>
        <input
          className="outline-none mb-6 active:border-2 bg-gray-100 w-full p-4 rounded-md"
          type="text"
          placeholder="Peter Parkor"/>

        <h3 className="font-medium text-lg mb-2">Email</h3>
        
        <input
          className="outline-none mb-6  bg-gray-100 w-full p-4 rounded-md"
          type="email"
          placeholder="hello@example.com"
        />

        <h3 className="font-medium text-lg mb-2">Company</h3>
        <input
          className="outline-none mb-6 active:border-2 bg-gray-100 w-full p-4 rounded-md"
          type="text"
          placeholder="Epoch Clan"
        />

        <h3 className="font-medium text-lg mb-2">Budget</h3>
        <input
          className="outline-none mb-6 active:border-2 bg-gray-100 w-full p-4 rounded-md"
          type="text"
          placeholder="$5000 - $10000"
        />
        <div className="w-full  flex mb-6">
          <div className="w-1/2">
            <h3 className="font-medium text-lg mb-2">Start date</h3>
            <input
              className="outline-none mr-5 bg-gray-100 w-11/12 p-4 rounded-md"
              type="date"
            />
          </div>
          <div className="w-1/2">
            <h3 className="font-medium text-lg mb-2">Ending date</h3>
            <input
              className="outline-none mr-4 bg-gray-100 w-11/12 p-4 rounded-md"
              type="date"
            />
          </div>
        </div>

        <h3 className="font-medium text-lg mb-2">Message</h3>
        <textarea
          className="bg-gray-100 p-4 mb-6 no-scrollbar w-full outline-none"
          name="Message"
          id="message"
          rows={6}
          placeholder="I heared you're the best!"
        />

        <h3 className="font-medium text-lg mb-2">How did you find me?</h3>
        <select className="w-full p-4 rounded-lg outline-none mb-6">
          <option className="p-4">How did you find me?</option>
          <option className="p-4">We've worked together before</option>
          <option className="p-4">I was recommended by someone</option>
          <option className="p-4">I found you through search engine</option>
          <option className="p-4">I saw you</option>
        </select>
        <div className="flex items-end">
          <input
            className="w-6 h-6 bg-gray-200"
            type="checkbox"
            value="agreed"
            required
          />
          <span className="ml-5 s2-p">I agree to be nice and kind person!</span>
        </div>
        <button className={`mt-8 font-base lg:font-normal rounded-full px-5 py-3 trans bg-${globalColor}`}>
          Send Message
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
