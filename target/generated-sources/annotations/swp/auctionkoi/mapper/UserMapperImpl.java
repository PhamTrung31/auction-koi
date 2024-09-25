package swp.auctionkoi.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import swp.auctionkoi.dto.request.UserCreateRequest;
import swp.auctionkoi.dto.request.UserUpdateRequest;
import swp.auctionkoi.dto.respone.UserResponse;
import swp.auctionkoi.models.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-25T08:01:19+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toUser(UserCreateRequest request) {
        if ( request == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( request.getUsername() );
        user.setPassword( request.getPassword() );
        user.setFullname( request.getFullname() );
        user.setPhone( request.getPhone() );
        user.setAddress( request.getAddress() );

        return user;
    }

    @Override
    public UserResponse toUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.username( user.getUsername() );
        userResponse.password( user.getPassword() );
        userResponse.fullname( user.getFullname() );
        userResponse.phone( user.getPhone() );
        userResponse.address( user.getAddress() );

        return userResponse.build();
    }

    @Override
    public void updateUser(User user, UserUpdateRequest request) {
        if ( request == null ) {
            return;
        }

        user.setPassword( request.getPassword() );
        user.setFullname( request.getFullname() );
        user.setPhone( request.getPhone() );
        user.setAddress( request.getAddress() );
    }
}
