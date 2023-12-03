document.addEventListener('DOMContentLoaded', function () {
    // Play Button Event Listener
    document.getElementById('playButton').addEventListener('click', function () {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.play();
    });

    // Download Button Event Listeners (Example for one button, repeat for others)
    document.getElementById('hd720Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP720/Chithha_(2023)__DL_1080p_AVC_(DD+5_1_192Kbps_&_AAC)_3_4GB _ESub_HD_720p.mp4', 'Chithha HP720/Chithha_(2023)');
    });

    document.getElementById('hd480Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP480/Chithha (2023 )NQ 480p,360p.mp4', 'Chithha (2023 )NQ 480p,360p.mp4');
    });

    document.getElementById('hd240Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP240/_Chithha_(2023) LQ_240p.mp4', 'Chithha_(2023) LQ_240p.mp4');
    });

    function simulateDownload(filePath, resolution) {
        // Simulate a file download by creating a temporary link
        const link = document.createElement('a');
        link.href = filePath;
        link.download = `video_${resolution}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});