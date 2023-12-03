document.addEventListener('DOMContentLoaded', function () {
    // Play Button Event Listener
    document.getElementById('playButton').addEventListener('click', function () {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.play();
    });

    // Download Button Event Listeners (Example for one button, repeat for others)
    document.getElementById('hd720Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP720/_Pathu_Thala_(2023)_.mp4', 'Pathu_Thala_(2023)_.mp4');
    });

    document.getElementById('hd480Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP480/Chithha HP480.mp4', 'Chithha HP480/Chithha HP480.mp4');
    });

    document.getElementById('hd240Button').addEventListener('click', function () {
        // Simulate download (replace with actual download logic)
        simulateDownload('Chithha HP240/Pathu_Thala_(2023)LQ 240p.mp4', 'Pathu_Thala_(2023)LQ 240p.mp4');
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