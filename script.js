// Global gallery variable
let gallery;

class Gallery {
    constructor() {
        this.items = [];
        this.currentFilter = 'all';
        this.currentIndex = 0;
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.mediaFiles = [];
        this.init();
    }

    init() {
        this.loadImagesFromFile();
        this.generateItems();
        this.renderGallery();
        this.bindEvents();
    }

    loadImagesFromFile() {
        // Image URLs from jpg_images.txt embedded directly to avoid CORS issues
        const imageUrls = [
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/IMG_3850.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3850.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3851.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3852.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3853.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3854.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3855.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3856.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3858.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3859.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3860.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3862.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3863.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3864.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3865.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3866.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3867.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3868.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3869.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3870.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3871.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3872.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3873.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3874.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3875.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3879.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3885.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3886.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3887.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3888.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3889.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3890.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3891.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3892.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3893.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3894.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3895.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3896.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3897.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3898.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3899.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3900.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3901.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3902.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3903.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3904.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3905.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3906.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3907.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3908.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3910.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3911.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3912.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3913.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3914.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3915.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3917.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3918.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3919.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3920.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3921.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3922.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3923.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3925.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3926.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3927.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3928.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3930.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3931.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3932.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3933.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3934.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3935.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3936.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3939.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3941.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3942.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3944.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3945.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3946.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3947.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3948.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3949.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3950.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3951.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3952.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3953.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3954.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3955.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3956.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3957.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3961.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3962.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3963.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3964.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3965.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3967.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3968.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3969.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3970.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3971.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3972.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3973.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3974.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3975.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3976.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3978.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3979.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3980.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3981.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3982.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3983.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3984.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3985.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3986.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3987.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3988.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3989.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3990.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3991.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3992.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3993.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3994.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3995.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3996.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3997.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3998.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_3999.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4000.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4001.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4002.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4005.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4006.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4007.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4008.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4009.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4010.JPG',
            'https://test-bucket-awni-1998.s3.eu-north-1.amazonaws.com/drive-download-20251005T214307Z-1-001/IMG_4011.JPG'
        ];
        
        this.mediaFiles = imageUrls.map((url, index) => ({
            id: index + 1,
            type: "image",
            src: url.trim(),
            title: `Image ${index + 1}`,
            category: "images"
        }));
        
        console.log('Loaded images:', this.mediaFiles.length);
        console.log('First few images:', this.mediaFiles.slice(0, 3));
    }

    generateItems() {
        // Define reel videos with src and button title
        const reelVideos = [
           {
              src: 'https://streamable.com/e/qgk4gl?loop=0',
              buttonTitle: 'Jaha'
            },
            {
              src: 'https://streamable.com/e/mjxr2r?loop=0',
              buttonTitle: 'Talbe'
            },
            {
                src: 'https://streamable.com/e/jmi741?loop=0&controls=1',
                buttonTitle: 'Trend 1'
            },
            {
                src: 'https://streamable.com/e/0439k2?controls=1',
                buttonTitle: 'Trend 2'
            }
            // Add more videos here as needed:
            // {
            //     src: 'https://streamable.com/e/VIDEOID?controls=1',
            //     buttonTitle: 'Trend 3'
            // }
        ];

        // Generate items using template
        reelVideos.forEach((video, index) => {
            this.items.push({
                id: 1001 + index,
                type: 'video',
                iframe: this.createIframeTemplate(video.src),
                title: video.buttonTitle,
                buttonTitle: video.buttonTitle,
                category: 'reels'
            });
        });
    }

    createIframeTemplate(src) {
        return `<div style="position:relative; width:100%; height:0; padding-bottom:56.25%; max-width:800px; margin:0 auto;">
            <iframe allow="fullscreen;autoplay" allowfullscreen height="100%" src="${src}" width="100%" 
                    style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;">
            </iframe>
        </div>`;
    }

    renderGallery() {
        // Combine mediaFiles with generated items (reels) - don't overwrite this.items
        const allItems = [...this.mediaFiles, ...this.items.filter(item => item.category === 'reels')];
        const gallery = document.getElementById('gallery');
        const filteredItems = this.currentFilter === 'all' 
            ? allItems 
            : allItems.filter(item => item.category === this.currentFilter);

        // Special handling for reels - render them completely differently
        if (this.currentFilter === 'reels') {
            const currentItemsPerPage = 1;
            const startIndex = (this.currentPage - 1) * currentItemsPerPage;
            const endIndex = startIndex + currentItemsPerPage;
            const pageItems = filteredItems.slice(startIndex, endIndex);

            // Create trend buttons using buttonTitle from data
            const trendButtons = filteredItems.map((item, index) => `
                <button class="trend-btn ${this.currentPage === index + 1 ? 'active' : ''}" 
                        onclick="gallery.selectReel(${index + 1})">
                    ${item.buttonTitle}
                </button>
            `).join('');

            gallery.innerHTML = pageItems.map((item) => `
                <div class="reel-container">
                    <div class="reel-header">
                        <div class="trend-buttons">
                            ${trendButtons}
                        </div>
                    </div>
                    ${item.iframe}
                </div>
            `).join('');
        } else {
            // Regular gallery rendering for images - load ALL images without pagination
            console.log('Rendering images:', filteredItems.length);
            gallery.innerHTML = filteredItems.map((item, index) => {
                console.log('Item src:', item.src);
                return `
                <div class="gallery-item" data-index="${allItems.indexOf(item)}" data-category="${item.category}">
                    <img src="${item.src || ''}" alt="${item.title}" loading="lazy" onerror="console.error('Failed to load image:', this.src)">
                    <div class="item-overlay">
                        <div class="item-type">${item.category.toUpperCase()}</div>
                        <div class="item-title">${item.title}</div>
                    </div>
                </div>
            `;
            }).join('');
        }

        // Only render pagination for reels, not for images
        if (this.currentFilter === 'reels') {
            this.renderPagination(filteredItems.length);
        } else {
            // Hide pagination for images
            const pagination = document.getElementById('pagination');
            if (pagination) {
                pagination.innerHTML = '';
            }
        }
    }

    renderPagination(totalItems) {
        // Use different items per page for reels (1 per page) vs images (5 per page)
        const currentItemsPerPage = this.currentFilter === 'reels' ? 1 : this.itemsPerPage;
        const totalPages = Math.ceil(totalItems / currentItemsPerPage);
        const pagination = document.getElementById('pagination');
        
        pagination.innerHTML = `
            <button ${this.currentPage === 1 ? 'disabled' : ''} onclick="gallery.changePage(${this.currentPage - 1})">Previous</button>
            <span>Page ${this.currentPage} of ${totalPages}</span>
            <button ${this.currentPage === totalPages ? 'disabled' : ''} onclick="gallery.changePage(${this.currentPage + 1})">Next</button>
        `;
    }

    changePage(page) {
        this.currentPage = page;
        this.renderGallery();
        this.bindGalleryItems();
        // Scroll to beginning of gallery grid with offset
        const main = document.querySelector('main');
        if (main) {
            main.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    selectReel(reelNumber) {
        this.currentPage = reelNumber;
        this.renderGallery();
    }

    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.currentPage = 1;
                
                // Add/remove body class for reels filter to hide hero section
                if (this.currentFilter === 'reels') {
                    document.body.classList.add('filter-reels');
                } else {
                    document.body.classList.remove('filter-reels');
                }
                
                this.renderGallery();
                this.bindGalleryItems();
            });
        });

        this.bindGalleryItems();
        this.bindModal();
    }

    bindGalleryItems() {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Prevent modal opening if clicking directly on video controls or iframe
                if (e.target.tagName === 'VIDEO' || e.target.tagName === 'IFRAME') {
                    e.stopPropagation();
                    return;
                }
                
                // Check if clicking inside an iframe container (for mobile video controls)
                if (e.target.closest('iframe') || e.target.closest('div[style*="position:relative"]')) {
                    e.stopPropagation();
                    return;
                }
                
                const index = parseInt(e.currentTarget.dataset.index);
                const category = e.currentTarget.dataset.category;
                
                // For reels, don't open modal - let users interact with iframe directly
                if (category === 'reels') {
                    e.stopPropagation();
                    return;
                } else {
                    // For images, open modal as before
                    this.openModal(index);
                }
            });
        });
    }

    bindModal() {
        const modal = document.getElementById('modal');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        closeBtn.addEventListener('click', () => this.closeModal());
        prevBtn.addEventListener('click', () => this.navigateModal(-1));
        nextBtn.addEventListener('click', () => this.navigateModal(1));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') this.closeModal();
                if (e.key === 'ArrowLeft') this.navigateModal(-1);
                if (e.key === 'ArrowRight') this.navigateModal(1);
            }
        });
    }

    openModal(index) {
        this.currentIndex = index;
        // Get the correct item from combined array
        const allItems = [...this.mediaFiles, ...this.items.filter(item => item.category === 'reels')];
        const item = allItems[index];
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalVideo = document.getElementById('modal-video');

        if (item.type === 'image') {
            modalImg.src = item.src;
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
        } else if (item.type === 'video' && item.category === 'reels') {
            // For reel videos, use the video element with autoplay and sound
            modalVideo.src = item.src;
            modalVideo.style.display = 'block';
            modalImg.style.display = 'none';
            modalVideo.autoplay = true;
            modalVideo.controls = true;
            modalVideo.loop = true;
        } else {
            modalVideo.src = item.src;
            modalVideo.style.display = 'block';
            modalImg.style.display = 'none';
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video if playing
        const modalVideo = document.getElementById('modal-video');
        modalVideo.pause();
    }

    navigateModal(direction) {
        const allItems = [...this.mediaFiles, ...this.items.filter(item => item.category === 'reels')];
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = allItems.length - 1;
        if (this.currentIndex >= allItems.length) this.currentIndex = 0;
        this.openModal(this.currentIndex);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    gallery = new Gallery();
});
