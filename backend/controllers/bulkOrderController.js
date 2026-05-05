import bulkOrderModel from '../models/bulkOrderModel.js';

// Placing Bulk Order (User)
const placeBulkOrder = async (req, res) => {
    try {
        const { fullName, organizationName, organizationType, phone, email, requirements, quantity, location } = req.body;

        const bulkOrderData = {
            fullName,
            organizationName,
            organizationType,
            phone,
            email,
            requirements,
            quantity: Number(quantity),
            location,
            status: "Pending",
            date: Date.now()
        };

        const newBulkOrder = new bulkOrderModel(bulkOrderData);
        await newBulkOrder.save();

        res.json({ success: true, message: "Bulk Order Inquiry Submitted" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// All Bulk Orders data for Admin Panel
const allBulkOrders = async (req, res) => {
    try {
        const bulkOrders = await bulkOrderModel.find({});
        res.json({ success: true, bulkOrders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update Bulk Order Status from Admin Panel
const updateBulkOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await bulkOrderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeBulkOrder, allBulkOrders, updateBulkOrderStatus }
