const User = require('../models/User');

// ===================== GET PROFILE =====================
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -resetToken -resetTokenExpiry');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching profile" });
  }
};

// ===================== UPDATE PROFILE =====================
exports.updateProfile = async (req, res) => {
  try {
    const { name, education_level, interests, age } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, education_level, interests, age },
      { new: true }
    ).select('-password -resetToken -resetTokenExpiry');

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating profile" });
  }
};
