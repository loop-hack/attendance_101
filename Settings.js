document.addEventListener("DOMContentLoaded", function() {
    // Theme Toggle Functionality
    const themeSelect = document.getElementById('theme');
    
    themeSelect.addEventListener('change', function() {
        if (themeSelect.value === 'Dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });

    // Save Settings Functionality
    const saveBtn = document.querySelector('.save-btn');
    
    saveBtn.addEventListener('click', function() {
        // Capture all the values
        const language = document.getElementById('language').value;
        const timezone = document.getElementById('timezone').value;
        const autoLogout = document.getElementById('auto-logout').value;
        const classTimetable = document.getElementById('class-timetable').value;
        const lateCheckin = document.getElementById('late-checkin').value;
        const faceThreshold = document.getElementById('face-threshold').value;
        const maskDetection = document.getElementById('mask-detection').checked;
        const encryption = document.getElementById('encryption').checked;
        const leaveManagement = document.getElementById('leave-management').checked;
        const attendanceHistory = document.getElementById('attendance-history').checked;
        const manualAttendance = document.getElementById('manual-attendance').checked;
        const multiFaceDetection = document.getElementById('multi-face-detection').checked;
        const externalDb = document.getElementById('external-db').checked;
        const apiAccess = document.getElementById('api-access').checked;
        const thirdPartyIntegration = document.getElementById('third-party-integration').checked;

        // Save all the settings into localStorage or send to server
        localStorage.setItem('language', language);
        localStorage.setItem('timezone', timezone);
        localStorage.setItem('autoLogout', autoLogout);
        localStorage.setItem('classTimetable', classTimetable);
        localStorage.setItem('lateCheckin', lateCheckin);
        localStorage.setItem('faceThreshold', faceThreshold);
        localStorage.setItem('maskDetection', maskDetection);
        localStorage.setItem('encryption', encryption);
        localStorage.setItem('leaveManagement', leaveManagement);
        localStorage.setItem('attendanceHistory', attendanceHistory);
        localStorage.setItem('manualAttendance', manualAttendance);
        localStorage.setItem('multiFaceDetection', multiFaceDetection);
        localStorage.setItem('externalDb', externalDb);
        localStorage.setItem('apiAccess', apiAccess);
        localStorage.setItem('thirdPartyIntegration', thirdPartyIntegration);

        alert("Settings saved successfully!");

        // Optionally reset fields after saving
        resetSettings();
    });

    function resetSettings() {
        document.getElementById('language').value = 'English';
        document.getElementById('theme').value = 'Light';
        document.getElementById('timezone').value = '';
        document.getElementById('auto-logout').value = '';
        document.getElementById('class-timetable').value = '';
        document.getElementById('late-checkin').value = '';
        document.getElementById('face-threshold').value = '';
        document.getElementById('mask-detection').checked = false;
        document.getElementById('encryption').checked = false;
        document.getElementById('leave-management').checked = false;
        document.getElementById('attendance-history').checked = false;
        document.getElementById('manual-attendance').checked = false;
        document.getElementById('multi-face-detection').checked = false;
        document.getElementById('external-db').checked = false;
        document.getElementById('api-access').checked = false;
        document.getElementById('third-party-integration').checked = false;
    }

    // Load saved settings if any
    function loadSavedSettings() {
        if (localStorage.getItem('language')) {
            document.getElementById('language').value = localStorage.getItem('language');
        }
        if (localStorage.getItem('timezone')) {
            document.getElementById('timezone').value = localStorage.getItem('timezone');
        }
        if (localStorage.getItem('autoLogout')) {
            document.getElementById('auto-logout').value = localStorage.getItem('autoLogout');
        }
        if (localStorage.getItem('classTimetable')) {
            document.getElementById('class-timetable').value = localStorage.getItem('classTimetable');
        }
        if (localStorage.getItem('lateCheckin')) {
            document.getElementById('late-checkin').value = localStorage.getItem('lateCheckin');
        }
        if (localStorage.getItem('faceThreshold')) {
            document.getElementById('face-threshold').value = localStorage.getItem('faceThreshold');
        }
        if (localStorage.getItem('maskDetection') === 'true') {
            document.getElementById('mask-detection').checked = true;
        }
        if (localStorage.getItem('encryption') === 'true') {
            document.getElementById('encryption').checked = true;
        }
        if (localStorage.getItem('leaveManagement') === 'true') {
            document.getElementById('leave-management').checked = true;
        }
        if (localStorage.getItem('attendanceHistory') === 'true') {
            document.getElementById('attendance-history').checked = true;
        }
        if (localStorage.getItem('manualAttendance') === 'true') {
            document.getElementById('manual-attendance').checked = true;
        }
        if (localStorage.getItem('multiFaceDetection') === 'true') {
            document.getElementById('multi-face-detection').checked = true;
        }
        if (localStorage.getItem('externalDb') === 'true') {
            document.getElementById('external-db').checked = true;
        }
        if (localStorage.getItem('apiAccess') === 'true') {
            document.getElementById('api-access').checked = true;
        }
        if (localStorage.getItem('thirdPartyIntegration') === 'true') {
            document.getElementById('third-party-integration').checked = true;
        }
    }

    loadSavedSettings();
});
