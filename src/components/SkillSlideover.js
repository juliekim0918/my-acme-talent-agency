import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { connect } from "react-redux";
import { addSkill } from "../store/skills";

const SkillSlideover = (props) => {
  const [open, setOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  function closeSlideover() {
    setOpen(false);
  }
  function openSlideOver() {
    setOpen(true);
  }
  const { addSkill } = props;
  return (
    <Fragment>
      <button
        className="w-fit bg-blue-700 text-white rounded-full py-3 px-5 shadow"
        onClick={openSlideOver}
      >
        + Add a skill
      </button>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20"
          onClose={closeSlideover}
        >
          <div className="absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed inset-y-0 right-0 bg-white md:w-1/5 w-11/12 flex">
                <div className="h-full flex flex-col py-10 px-10 bg-white shadow-xl min-w-full ">
                  <div className="">
                    <Dialog.Title className="text-3xl font-semibold text-gray-900">
                      Add a skill
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 ">
                    <form action="">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg">
                          Name
                        </label>
                        <input
                          type="text"
                          className="mt-3 rounded-full border-gray-300"
                          onChange={(evt) => setNewSkill(evt.target.value)}
                        />
                      </div>
                      <button
                        className="py-3 px-5 shadow mt-5 w-full bg-blue-700 text-white rounded-full"
                        onClick={() => addSkill(newSkill)}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSkill: (name) => {
      dispatch(addSkill(name));
    },
  };
};

export default connect(null, mapDispatchToProps)(SkillSlideover);
