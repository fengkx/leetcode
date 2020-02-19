// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int low = 1;
        int hight = n;
        
        while(low <= hight) {
            int mid = low + (hight - low) / 2;
            if(!isBadVersion(mid)) {
                low = mid+1;
            } else {
                hight = mid-1;
            }
        }
        
        return low;
    }
};
