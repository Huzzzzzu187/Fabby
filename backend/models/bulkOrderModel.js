import mongoose from "mongoose";

const bulkOrderSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    organizationName: { type: String, required: true },
    organizationType: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    requirements: { type: String, required: true },
    quantity: { type: Number, required: true },
    location: { type: String, required: true },
    status: { type: String, default: "Pending" },
    date: { type: Number, required: true }
})

const bulkOrderModel = mongoose.models.bulkorder || mongoose.model("bulkorder", bulkOrderSchema);
export default bulkOrderModel;
