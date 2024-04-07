<template>
  <div>
    <h1>Update Document</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">
          <a :href="existingDocuments.license" target="_blank">License</a>
        </label>
        <input type="file" class="form-control" id="license" aria-describedby="licenseHelp" accept="application/pdf,image/*">
      </div>

      <div class="mb-3">
        <label class="form-label">
          <a :href="existingDocuments.nbi_clearance" target="_blank">NBI Clearance</a>
        </label>
        <input type="file" class="form-control" id="nbi_clearance" aria-describedby="nbiClearanceHelp" accept="application/pdf,image/*">
      </div>

      <div class="mb-3">
        <label class="form-label">
          <a :href="existingDocuments.lto_driving_history" target="_blank">LTO Driving History</a>
        </label>
        <input type="file" class="form-control" id="lto_driving_history" aria-describedby="ltoDrivingHistoryHelp" accept="application/pdf,image/*">
      </div>

      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      existingDocuments: {
    
      }
    };
  }
};
</script>
