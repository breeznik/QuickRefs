import asyncHandler from "express-async-handler";
import contactModel from "../models/contactModel.js";

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find({ user_id: req.user.id });
  res.status(200).json({ contacts });
});

//@desc Create new Contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  const contact = await contactModel.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json({ contact });
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json({ contact });
});

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other users contact");
  }
  const udpatedContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ udpatedContact });
});

//@desc delete Contacts
//@route delete /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other users contact");
  }
  await contactModel.deleteOne({_id: req.params.id});
  res.status(200).json(contact);
});

export { getContacts, createContact, updateContact, deleteContact, getContact };
