# Git Flow

### :loudspeaker: Mô tả
**File này dùng để đặc tả quy trình chung, cơ bản khi làm việc nhóm trong project.**

### :triangular_flag_on_post: Các ```branch``` chính được dùng trong project
- ```main``` là branch chứa live code - code chính thức.
- ```develop``` là branch chứa toàn bộ các features đang phát triển, được merge từ các nhánh khác
- ```{developer_member}``` là branch nơi các thành viên code các features, các phần mà thành viên đó làm. Ví dụ: ```SonTH```, ```QuangNV```, ```DungDH```, ```DucNV```
- Các branch phụ khác, tùy vào từng thành viên sẽ được checkout tương ứng trên các ```branch``` của thành viên đó
### :bangbang: Một vài điều căn bản cần lưu ý
- :heavy_check_mark: Luôn ```pull``` trước khi ```push```
- :heavy_check_mark: Luôn cẩn thận kiểm tra ```branch``` mình đang làm
- :heavy_check_mark: Chỉ code trên ```branch``` của mình và các ```branch``` checkout từ đó
- :heavy_check_mark: Làm xong trên ```branch``` của mình thì merge code từ ```branch``` đó vào ```develop```, sau đó mới tạo ```pull request``` để merge vào ```main```
- :x: Không ```push``` các files rác, files không cần thiết lên trên ```remote repository```, files nào không muốn push thì đưa vào ```.gitignore```
- :x: Không code trực tiếp trên ```main``` branch
### :triangular_flag_on_post: Quy trình chung khi làm task
##### 	:red_circle: Trường hợp 1: Chưa có local repository
- ```clone``` remote repository về local
- ```set remote``` là url của remote repository
- Cài đặt các dependencies, thư viện liên quan (tùy vào package manager team dùng)

##### 	:red_circle: Trường hợp 2: Đã có local repository
1. Kiểm tra branch hiện tại đang làm với ```git branch``` hoặc ```git status```
2. Checkout sang ```develop``` và update code với ```pull```
3. Tạo (nếu chưa có) và checkout sang ```branch``` của mình từ ```develop```
4. Sau khi làm xong task, ```merge``` code từ ```develop``` vào branch của mình, fix conflicts (nếu có)
5. ```push``` branch của mình lên ```remote repository```
6. ```checkout``` sang ```develop``` (update nếu cần thiết), ```merge``` code branch của mình vào ```develop```
7. ```push``` những thay đổi của ```develop``` lên remote repository
  
